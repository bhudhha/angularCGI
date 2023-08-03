import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OnInit } from '@angular/core';
import { MyRestService } from '../my-rest.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  constructor(private myrest: MyRestService) {}
  regForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    this.regForm.controls['username'].setValidators(Validators.required);
    this.regForm.controls['password'].setValidators(Validators.required);
  }
  onSubmit() {
    this.myrest.logSubmit(this.regForm.value).subscribe((response) => {
      console.log(response);
    });
  }
}
