import { Component } from '@angular/core';
import { Person } from './person';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  p = new Person();
  hide = true;
  onSubmit(x: NgForm) {
    console.log(x.value);
  }
}
