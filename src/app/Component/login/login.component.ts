import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {UserService} from './../../services/user.service';

import {User} from './../../Interfaces/user';

var loginFlag = false;
@Component({
  selector: 'shop-log-in',
  templateUrl: 'src/app/Component/login/login.component.html',
  styleUrls: ['src/app/Component/login/login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  // heroes: Hero[];
  // selectedHero: Hero;

  users: User[];

  constructor(
    private _router: Router, private _userSevice: UserService) { }

  getUsers() {
    this._userSevice.getUsers().then((users, ops, ops2) => { console.log('users', users, ops, ops2); this.users = users });
  }

  ngOnInit() {
   
    this.getUsers();
  }

  // onSelect(hero: Hero) { this.selectedHero = hero; }

  onRegisterClick() {
    this._router.navigate(['Signup']);
  }
  signinClickHandle() {
    this._router.navigate(['Home']);
  }
}
