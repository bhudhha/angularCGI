import { Component , OnInit, NgZone} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyRestService } from '../my-rest.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private zone: NgZone, private myrest: MyRestService) {}
  title = 'blog app';
  panelOpenState = false;
  listNote = new Array<any>();
  ngOnInit(): void {
    this.myrest.getNotes().subscribe((response) => {
      console.log(response)
      response.forEach((element:any )=> {
        this.listNote.push(element)
      });
    });
  }

  onSubmit(x: NgForm) {
    
    this.myrest.addNotes(x.value).subscribe((result) => {
      this.listNote.push(result);
    });
  }
}
