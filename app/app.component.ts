import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductAddComponent } from './Component/product-add/prodAdd.component';


/**
 * [Component description]
 *
 */
@Component({
  selector: 'my-app',
  template: `
  <div class="container app">
    <div class="container-fluid header">
      <ul class="nav nav-tabs nav-justified">
        <li role="presentation" class="active"><a href="#" >Home</a></li>
        <li role="presentation" ><a href="/product-add" >Add Product</a></li>
        <li role="presentation" ><a href="/prom">Promote</a></li>
      </ul>
    </div>
  </div>
  <router-outlet></router-outlet>
`,
 styleUrls: ['app/app.component.css'],
 directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    
  ]
})

/**
 * [RouteConfig description]
 * @param {true                 }}  {    path [description]
 * @param {HeroDetailComponent  }}  {    path [description]
 * @param {HeroesComponent,     }]} {    path [description]
 */
@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/product-add',
    name: 'ProductAdd',
    component: ProductAddComponent
  }
])

/**
 * 
 */
export class AppComponent {
  title = 'Tour of Heroes';
}