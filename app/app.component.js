System.register(['angular2/core', 'angular2/router', 'angular2/http', './Component/login/login.component', './Component/signup/signup.component', './Component/home/home.component', './Component/product-add/prodAdd.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, login_component_1, signup_component_1, home_component_1, prodAdd_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (prodAdd_component_1_1) {
                prodAdd_component_1 = prodAdd_component_1_1;
            }],
        execute: function() {
            /**
             * [Component description]
             *
             */
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div class=\"container app\">\n    <div class=\"container-fluid header\">\n      <ul class=\"nav nav-tabs nav-justified\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#\" >Home</a></li>\n        <li role=\"presentation\" ><a href=\"/product-add\" >Add Product</a></li>\n        <li role=\"presentation\" ><a href=\"/prom\">Promote</a></li>\n      </ul>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/signup',
                            name: 'Signup',
                            component: signup_component_1.SignupComponent
                        },
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent
                        },
                        {
                            path: '/product-add',
                            name: 'ProductAdd',
                            component: prodAdd_component_1.ProductAddComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map