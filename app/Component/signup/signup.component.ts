import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {UserService} from './../../services/user.service';
import {NgClass} from 'angular2/common';
// import {CSSClass} from 'angular2/angular2';

var loginFlag = false;
@Component({
  selector: 'shop-sign-up',
  templateUrl: 'app/Component/signup/signup.component.html',
  styleUrls: ['app/Component/signup/signup.component.css'],
  providers: [UserService],
  directives: [NgClass]
})
export class SignupComponent implements OnInit {
  // heroes: Hero[];
  // selectedHero: Hero;

  fullName: string;
  email: string;
  username: string;
  password: string;
  passwordChk: string;

  isEmailValid: boolean;
  isPasswordMatched: boolean;

  isFullNameNotNull: boolean;
  isUserNameNotNull: boolean;
  isEmailNotNull: boolean;
  isPasswordNotNull: boolean;
  isPasswordChkNotNull: boolean;

  isRegisterBtnEnabled: boolean = false;



  constructor(
    private _router: Router,
    private _userService: UserService) { }

  // getHeroes() {
  //   this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }

  /**
   * if User has not signed in then he is redirected to login page :)
   *
   */
  resetData(){
    this.fullName = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.passwordChk = '';

    this.isEmailValid = false;
    this.isPasswordMatched = true;
    
    this.isFullNameNotNull = false;
    this.isUserNameNotNull = false;
    this.isEmailNotNull = false;
    this.isPasswordNotNull = false;
    this.isPasswordChkNotNull = false;
    this.isRegisterBtnEnabled = false;


  }
  ngOnInit() {
    this.isEmailValid = false;
    this.isPasswordMatched = true;
    this.isFullNameNotNull = false;
    this.isUserNameNotNull = false;
    this.isEmailNotNull = false;
    this.isPasswordNotNull = false;
    this.isPasswordChkNotNull = false;
    this.isRegisterBtnEnabled = false;

  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onKeyUpEmail(evt){
    var value = evt.target.value;
    this.isEmailNotNull = value ? true : false;
    if(!value){
      return;
    }
    this.isEmailValid = this.validateEmail(value);
    this.handleRegisterBtnDisabled();
  }

  onKeyUpFullName(evt){
    var value = evt.target.value;
    this.isFullNameNotNull = value ? true : false;
    this.handleRegisterBtnDisabled();
  }

  onKeyUpUsername(evt) {
    var value = evt.target.value;
    this.handleRegisterBtnDisabled();
    this.isUserNameNotNull = value ? true : false;
  }

  onKeyUpPasswordChk(evt) {
    var value = evt.target.value;
    this.isPasswordChkNotNull = value ? true : false;
    this.handleRegisterBtnDisabled();
  }

  onKeyUpPassword(evt) {
    var value = evt.target.value;
    this.isPasswordNotNull = value ? true : false;
    this.isPasswordMatched = this.passwordChk === this.password;
    this.handleRegisterBtnDisabled();
  }

  isFormValid(){
    return this.isFullNameNotNull && this.isEmailValid && this.isUserNameNotNull 
            && this.isPasswordMatched && this.isPasswordChkNotNull && this.isPasswordNotNull;
  }

  // onSelect(hero: Hero) { this.selectedHero = hero; }

  handleRegisterBtnDisabled(){
    this.isRegisterBtnEnabled = this.isFormValid();
  }


  registerClickHandle() {
    console.log('this', this);
    if(!this.isRegisterBtnEnabled){
      this.resetData();
      return;
    }
    var inputData = {
      "fullName": this.fullName, 
      "email": this.email,
      "password": this.password,
      "username": this.username 
    };
    
    // var inputData = {
    //   "fullName": 'brajendra',
    //   "accountExpired": false,
    //   "accountLocked": false,
    //   "email": 'sbbsb123@fsf.com',
    //   "enabled": false,
    //   "password": 'kumar',
    //   "passwordExpired": false,
    //   "username": 'bb123'
    // };

    this._userService.addUser(inputData).then(res => { 
      console.log('res----',res);
      this._router.navigate(['Login']);
    });

  }
}
