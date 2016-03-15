import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {UserService} from './../../services/user.service';

import {User} from './../../Interfaces/user';

var loginFlag = false;
@Component({
  selector: 'shop-log-in',
  template: `
    <div class="container app-body">
    <li *ngFor="#user of users">
        <span class="badge">{{user.id}}</span> {{user.fullName}}
      </li>
    <div class="login-box">
      <div class="input-section">
        <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        <input type="password" class="form-control password" placeholder="Password" aria-describedby="basic-addon1">
      </div>
      <div class="buttonSection">
        <button type="button" id="logInBtn" class="btn btn-primary" (click)="signinClickHandle()">Sign In</button>
        <button type="button" id="registerBtn" class="btn btn-primary" (click)="onRegisterClick()">Don't have an account</button>
      </div>
    </div>
</div>
  `,
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
    console.log('sign in clicked.......');
    this._router.navigate(['Home']);
  }
}
