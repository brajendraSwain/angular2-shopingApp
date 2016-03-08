import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {UserService} from './../../services/user.service';


var loginFlag = false;
@Component({
  selector: 'shop-prod-add',
  templateUrl: 'app/Component/product-add/prodAdd.component.html',
  styleUrls: ['app/Component/product-add/prodAdd.component.css'],
  providers: [UserService]
})

export class ProductAddComponent implements OnInit {

  constructor(
    private _router: Router, private _userSevice: UserService) { }

  // onSelect(hero: Hero) { this.selectedHero = hero; }

  onRegisterClick() {
    this._router.navigate(['Signup']);
  }
  signinClickHandle() {
    this._router.navigate(['Home']);
  }
}
