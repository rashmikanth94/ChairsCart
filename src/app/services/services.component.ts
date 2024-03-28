import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  logInForm:FormGroup;
  constructor( private router: Router) {

  }

  redirectToLogIn() {
    this.router.navigate(['/login'])

  }

  submitForm() {

  }
}
