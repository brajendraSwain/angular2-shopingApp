System.register(['angular2/core', 'angular2/router', './../../services/user.service', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1, common_1;
    var loginFlag, SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            // import {CSSClass} from 'angular2/angular2';
            loginFlag = false;
            SignupComponent = (function () {
                function SignupComponent(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                    this.isRegisterBtnEnabled = false;
                }
                // getHeroes() {
                //   this._heroService.getHeroes().then(heroes => this.heroes = heroes);
                // }
                /**
                 * if User has not signed in then he is redirected to login page :)
                 *
                 */
                SignupComponent.prototype.resetData = function () {
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
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.isEmailValid = false;
                    this.isPasswordMatched = true;
                    this.isFullNameNotNull = false;
                    this.isUserNameNotNull = false;
                    this.isEmailNotNull = false;
                    this.isPasswordNotNull = false;
                    this.isPasswordChkNotNull = false;
                    this.isRegisterBtnEnabled = false;
                };
                SignupComponent.prototype.validateEmail = function (email) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(email);
                };
                SignupComponent.prototype.onKeyUpEmail = function (evt) {
                    var value = evt.target.value;
                    this.isEmailNotNull = value ? true : false;
                    if (!value) {
                        return;
                    }
                    this.isEmailValid = this.validateEmail(value);
                    this.handleRegisterBtnDisabled();
                };
                SignupComponent.prototype.onKeyUpFullName = function (evt) {
                    var value = evt.target.value;
                    this.isFullNameNotNull = value ? true : false;
                    this.handleRegisterBtnDisabled();
                };
                SignupComponent.prototype.onKeyUpUsername = function (evt) {
                    var value = evt.target.value;
                    this.handleRegisterBtnDisabled();
                    this.isUserNameNotNull = value ? true : false;
                };
                SignupComponent.prototype.onKeyUpPasswordChk = function (evt) {
                    var value = evt.target.value;
                    this.isPasswordChkNotNull = value ? true : false;
                    this.handleRegisterBtnDisabled();
                };
                SignupComponent.prototype.onKeyUpPassword = function (evt) {
                    var value = evt.target.value;
                    this.isPasswordNotNull = value ? true : false;
                    this.isPasswordMatched = this.passwordChk === this.password;
                    this.handleRegisterBtnDisabled();
                };
                SignupComponent.prototype.isFormValid = function () {
                    return this.isFullNameNotNull && this.isEmailValid && this.isUserNameNotNull
                        && this.isPasswordMatched && this.isPasswordChkNotNull && this.isPasswordNotNull;
                };
                // onSelect(hero: Hero) { this.selectedHero = hero; }
                SignupComponent.prototype.handleRegisterBtnDisabled = function () {
                    this.isRegisterBtnEnabled = this.isFormValid();
                };
                SignupComponent.prototype.registerClickHandle = function () {
                    var _this = this;
                    console.log('this', this);
                    if (!this.isRegisterBtnEnabled) {
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
                    this._userService.addUser(inputData).then(function (res) {
                        console.log('res----', res);
                        _this._router.navigate(['Login']);
                    });
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'shop-sign-up',
                        templateUrl: 'app/Component/signup/signup.component.html',
                        styleUrls: ['app/Component/signup/signup.component.css'],
                        providers: [user_service_1.UserService],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map