import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyRestService } from './my-rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private zone: NgZone, private myrest: MyRestService) {}
  title = 'blog app';
  panelOpenState = false;
  listNote = new Array<any>();
  ngOnInit(): void {
    this.myrest.getNotes().subscribe((response) => {
      this.zone.run(() => {
        this.listNote = response;
      });
    });
  }

  onSubmit(x: NgForm) {
    this.myrest.addNotes(x.value).subscribe((result) => {});
  }
}
