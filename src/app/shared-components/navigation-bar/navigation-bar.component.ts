import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SignInService} from './../../sign-in.service'


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit{


  listItems = ['Home','About','Services'];
  showMenuItems = false;
  isSignedIn = false;
  showUserDetails = false;

  constructor(private router:Router, private SignInService: SignInService ) {}

  ngOnInit(): void {
    this.SignInService.signInEmitter.subscribe((value)=> {
      this.isSignedIn = value
    });
  }


  handlenavigation(item:string) {
    if(item.toLowerCase() == 'home') {
      this.router.navigate(['/'+item.toLowerCase()]);
    }
  }

  toggleHamburger() {
    this.showMenuItems = !this.showMenuItems;
  }

  @HostListener("window:resize",[]) setMenuboolean() {
    if (window.innerWidth >= 640) {
      this.showMenuItems = false;
    } 
  }

  signIn() {
    this.showUserDetails = false;
    this.router.navigate(['/login']);
  }

  showDetails() {
    this.showUserDetails = !this.showUserDetails;
  }

  signOut() {
    this.isSignedIn = false;
    this.SignInService.userSignOut();
  }
}

