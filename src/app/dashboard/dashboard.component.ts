import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyRestService } from '../my-rest.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private myrest: MyRestService) {}
  isActive = false;
  title = 'blog app';

  listNote = new Array<any>();

  ngOnInit(): void {
    this.myrest.getNotes().subscribe((response) => {
      response.forEach((element: any) => {
        this.listNote.push(element);
      });
    });
  }

  onSubmit(x: NgForm) {
    this.myrest.addNotes(x.value).subscribe((result) => {
      this.listNote.push(result);
    });
  }
  Delete(id: any) {
    this.myrest.Delete(id).subscribe((res) => {
      this.listNote = this.listNote.filter((arr) => {
        return arr.id !== id;
      });
    });
  }
 
}
