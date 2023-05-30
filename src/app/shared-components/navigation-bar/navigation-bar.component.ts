import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(private router:Router) {}
  listItems = ['Home','About','Services'];
  showMenuItems = false;

  handlenavigation(item:string) {
    this.router.navigate(['/'+item.toLowerCase()]);
  }

  toggleHamburger() {
    this.showMenuItems = !this.showMenuItems;
  }

  @HostListener("window:resize",[]) setMenuboolean() {
    if (window.innerWidth >= 640) {
      this.showMenuItems = false;
    } 
  }

}

