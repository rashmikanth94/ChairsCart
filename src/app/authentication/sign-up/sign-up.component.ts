import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  logInForm:FormGroup;
  constructor( private router: Router) {

  }

  redirectToLogIn() {
    this.router.navigate(['/login'])

  }

  submitForm() {

  }
}
