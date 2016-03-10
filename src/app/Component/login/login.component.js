System.register(['angular2/core', 'angular2/router', './../../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1;
    var loginFlag, LoginComponent;
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
            }],
        execute: function() {
            loginFlag = false;
            LoginComponent = (function () {
                function LoginComponent(_router, _userSevice) {
                    this._router = _router;
                    this._userSevice = _userSevice;
                }
                LoginComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userSevice.getUsers().then(function (users, ops, ops2) { console.log('users', users, ops, ops2); _this.users = users; });
                };
                LoginComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                // onSelect(hero: Hero) { this.selectedHero = hero; }
                LoginComponent.prototype.onRegisterClick = function () {
                    this._router.navigate(['Signup']);
                };
                LoginComponent.prototype.signinClickHandle = function () {
                    this._router.navigate(['Home']);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'shop-log-in',
                        template: "\n    <div class=\"container app-body\">\n    <li *ngFor=\"#user of users\">\n        <span class=\"badge\">{{user.id}}</span> {{user.fullName}}\n      </li>\n    <div class=\"login-box\">\n      <div class=\"input-section\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\">\n        <input type=\"password\" class=\"form-control password\" placeholder=\"Password\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"buttonSection\">\n        <button type=\"button\" id=\"logInBtn\" class=\"btn btn-primary\" (click)=\"signinClickHandle()\">Sign In</button>\n        <button type=\"button\" id=\"registerBtn\" class=\"btn btn-primary\" (click)=\"onRegisterClick()\">Don't have an account</button>\n      </div>\n    </div>\n</div>\n  ",
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map