import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  @Output() signInEmitter =  new EventEmitter();

  userDetails = {
    'email':'deepu19@gmail.com',
    'password':1234
  }

  constructor() { }

  isSignedIn:boolean = false;
  // userDetails:any;

  userSignedIn() {
    this.isSignedIn = true;
    this.signInEmitter.emit(this.isSignedIn);
  }

  checkUser(userDetails) {

    if((userDetails.email == this.userDetails.email) && (userDetails.password == this.userDetails.password)){
      this.userSignedIn();
      console.log(userDetails);

      return true;
    } else {
      return false;
    }
  }

  userSignOut() {
    this.isSignedIn = false;
    this.signInEmitter.emit(this.isSignedIn);
  }
}
