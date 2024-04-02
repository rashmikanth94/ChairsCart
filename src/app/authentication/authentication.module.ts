import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@Injectable({
  providedIn:'root'
})

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  exports: [
    SignInComponent
  ]
})
export class AuthenticationModule { }
