import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  logInForm:FormGroup;
  Email = 'Email'

  constructor( private router: Router) {

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
    this.redirectToHome();
  }

  redirectToSignUp() {
    this.router.navigate(['/services'])
  }

  redirectToHome() {
    this.router.navigate(['/home'])
  }


}
