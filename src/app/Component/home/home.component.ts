import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

var loginFlag = false;
@Component({
  selector: 'shop-home',
  templateUrl: 'src/app/Component/home/home.component.html',
  styleUrls: ['src/app/Component/home/home.component.css']
})
export class HomeComponent implements OnInit {
  // heroes: Hero[];
  // selectedHero: Hero;

  constructor(
    private _router: Router) { }

  ngOnInit() {
   
    // this.getHeroes();
  }
}
