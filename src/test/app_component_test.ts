import {
  describe,
  xdescribe,
  it,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders,
  beforeEach
} from 'angular2/testing';

import {
  provide,
  ApplicationRef
} from 'angular2/core';

import { RootRouter } from 'angular2/src/router/router';
import { SpyLocation } from 'angular2/src/mock/location_mock';

// import {setBaseTestProviders} from 'angular2/testing';

// import {
//   TEST_BROWSER_PLATFORM_PROVIDERS,
//   TEST_BROWSER_APPLICATION_PROVIDERS
// } from 'angular2/platform/testing/browser';


import { LoginComponent } from './../app/Component/login/login.component';

import { Router, ROUTER_PROVIDERS, ROUTER_PRIMARY_COMPONENT, APP_BASE_HREF, RouteRegistry } from 'angular2/router';

import {AppComponent} from './../app/app.component';

import {BasicTestSetup} from './basic_test_setup.js';


import {MockApplicationRef} from 'angular2/src/mock/mock_application_ref';


var basicTestSetup = new BasicTestSetup();




// describe('Apppp', () => {

//   var location, router;

//   // //setup
//   // beforeEachProviders(() => [
//   //   RouteRegistry,
//   //   provide(Location, { useClass: SpyLocation }),
//   //   provide(Router, { useClass: RootRouter }),
//   //   provide(ROUTER_PRIMARY_COMPONENT, { useValue: App })
//   // ]);

//   // beforeEach(inject([Router, Location], (r, l) => {
//   //   router = r;
//   //   location = l;
//   // }));

//   beforeEachProviders(() => [
//     RouteRegistry,
//     provide(Location, { useClass: SpyLocation }),
//     provide(Router, { useClass: RootRouter }),
//     ROUTER_PROVIDERS,
//     provide(APP_BASE_HREF, { useValue: '/' }),
//     provide(ROUTER_PRIMARY_COMPONENT, { useValue: AppComponent }),
//     provide(ApplicationRef, { useClass: MockApplicationRef })
//   ]);

//   basicTestSetup.initialSetup();

//   it('Apppp', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//     return tcb.createAsync(LoginComponent).then((fixture) => {
//       expect(true).toEqual(true);
//     });
//   }));

// });


describe('Router tests', () => {
  var location, router;

  //setup
  // beforeEachProviders(() => [
  //   RouteRegistry,
  //   provide(Location, { useClass: SpyLocation }),
  //   provide(Router, { useClass: RootRouter }),
  //   provide(ROUTER_PRIMARY_COMPONENT, { useValue: App })
  // ]);
  // 
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, { useClass: SpyLocation }),
    provide(Router, { useClass: RootRouter }),
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(ROUTER_PRIMARY_COMPONENT, { useValue: AppComponent }),
    provide(ApplicationRef, { useClass: MockApplicationRef })
  ]);

  beforeEach(inject([Router, Location], (r, l) => {
    router = r;
    location = l;
  }));

  //specs
  it('defauld load url is Login', done => {
    router.navigateByUrl('/').then(() => {
      expect(window.location.pathname).toBe('/login');
      done();
    }).catch(e => done.fail(e));
  });

  it('Should be able to navigate to Login', done => {
    router.navigate(['Login']).then(() => {
      console.log('location------', location, window.location.pathname);
      // expect(location.path()).toBe('/home');
      expect(window.location.pathname).toBe('/login');
      done();
    }).catch(e => done.fail(e));
  });

  it('Should be able to navigate to Home', done => {
    router.navigate(['Home']).then(() => {
      console.log('location------', location, window.location.pathname);
      // expect(location.path()).toBe('/home');
      expect(window.location.pathname).toBe('/home');
      done();
    }).catch(e => done.fail(e));
  });

  it('Should be able to navigate to Signup', done => {
    router.navigate(['Signup']).then(() => {
      console.log('location------', location, window.location.pathname);
      // expect(location.path()).toBe('/home');
      expect(window.location.pathname).toBe('/signup');
      done();
    }).catch(e => done.fail(e));
  });

  it('Should be able to navigate to Product Add', done => {
    router.navigate(['ProductAdd']).then(() => {
      console.log('location------', location, window.location.pathname);
      // expect(location.path()).toBe('/home');
      expect(window.location.pathname).toBe('/product-add');
      done();
    }).catch(e => done.fail(e));
  });
  // it('should redirect not registered urls to Home', done => {
  //   router.navigateByUrl('/unknown').then(() => {
  //     expect(location.path()).toBe('/home');
  //     done();
  //   }).catch(e => done.fail(e));
  // });
});
