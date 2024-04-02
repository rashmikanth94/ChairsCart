import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SignInService} from './../../sign-in.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  logInForm:FormGroup;
  Email = 'Email'
  signedIn = false;
  InvalidCredentials = false;
  constructor( private router: Router, private SignInService: SignInService) {

  }
  ngOnInit() {
    this.initializeLogInForm();
  }

  initializeLogInForm() {
    this.logInForm = new FormGroup({
      'email':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required)
    })
  }

  submitForm() {
    const formValues = this.logInForm.value;
    const credentials = {
      'email':formValues.email,
      'password':formValues.password
    };
    // this.signedIn = true;
    console.log(credentials);
    if (this.SignInService.checkUser(credentials)){
      this.redirectToHome();
      this.InvalidCredentials = false;
    } else {
      this.InvalidCredentials = true;
      this.clearErrorTimer();
    }
  }

  redirectToSignUp() {
    // this.router.navigate(['/signUp'])
  }

  redirectToHome() {
    this.router.navigate(['/home'])
  }

  clearErrorTimer() {
    const x = setTimeout(()=> {
      this.InvalidCredentials = false;
    },2000)
  }

}
