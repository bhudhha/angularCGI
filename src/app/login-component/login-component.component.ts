import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { MyRestService } from '../my-rest.service';
// import { Token } from '@angular/compiler';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  constructor(private myrest: MyRestService, private router: Router) {}
  logginUser = false;
  regForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    this.regForm.controls['username'].setValidators(Validators.required);
    this.regForm.controls['password'].setValidators(Validators.required);
    if (this.myrest.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  onSubmit() {
    this.myrest.logSubmit(this.regForm.value).subscribe((response) => {
      localStorage.setItem('token', 'my application');
      this.router.navigate(['']);
    });
  }
}
