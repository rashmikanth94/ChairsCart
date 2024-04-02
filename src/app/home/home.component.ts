import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  chairscategories = [
    {
      name:'Sofas'
    },
    {
      name:'Office Chairs'
    },
    {
      name:'Stools'
    },
    {
      name:'Recliners'
    },
    {
      name:'Gaming Chairs'
    }
  ]

  ngOnInit(): void {

  }

  constructor(private router:Router) {

  }


  swipeVal = 1;
  rightSwipe() {
    const cardHolder: any = document.querySelectorAll('.cardsHolder')[0] as HTMLElement;
    cardHolder.scrollBy({
      left: 350,
      behavior: 'smooth',
      'scroll-behavior':'smooth'
    })
  }

  swipeLeft() {
    const cardHolder: any = document.querySelectorAll('.cardsHolder')[0] as HTMLElement;
    cardHolder.scrollBy({
      left: -350,
      behavior: 'smooth'
    })
  }

  explore() {
    const scrollNav = document.querySelector('.cardsHolder') as HTMLElement;
    console.log(scrollNav)
    scrollNav.scrollIntoView({
      behavior:"smooth"
    })
  }

  cardClick(name:string) {
    // this.router.navigate(['detail']);
  }
}
