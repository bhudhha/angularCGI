import { Component } from '@angular/core';
import { MyRestService } from '../my-rest.service';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent {
  constructor(private myrest: MyRestService) {}
}
