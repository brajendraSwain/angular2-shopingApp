import {
  describe,
  xdescribe,
  it,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders,
  beforeEach,
  tick,
  fakeAsync
} from 'angular2/testing';

import {
  provide,
  ApplicationRef,
  Component
} from 'angular2/core';

import {setBaseTestProviders, resetBaseTestProviders} from 'angular2/testing';

import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import {BasicTestSetup} from './basic_test_setup.js';

import { HTTP_PROVIDERS } from 'angular2/http';


import { LoginComponent } from './../app/Component/login/login.component';

import { Router, ROUTER_PROVIDERS, ROUTER_PRIMARY_COMPONENT, APP_BASE_HREF } from 'angular2/router';

import {AppComponent} from './../app/app.component';

import {MockApplicationRef} from 'angular2/src/mock/mock_application_ref';




var basicTestSetup = new BasicTestSetup();

describe('Log in component', () => {


  beforeEachProviders(() => [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(ROUTER_PRIMARY_COMPONENT, { useValue: AppComponent }),
    provide(ApplicationRef, { useClass: MockApplicationRef })
 ]);

  basicTestSetup.initialSetup();

  it('log in button should be there', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(LoginComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#logInBtn')).toHaveText('Sign In');
    });
  }));
  
  it('register in button should be there', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(LoginComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#registerBtn')).toHaveText("Don't have an account");
    });
  }));

  // it('After log in user should be navigated to home page', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
  //   return tcb.createAsync(LoginComponent).then((fixture) => {
  //     fixture.detectChanges();
  //     var compiled = fixture.debugElement.nativeElement;

  //     compiled.querySelector('#logInBtn').click();

  //     tick();
  //     fixture.detectChanges();
  //     setTimeout(() => { 
  //       var compiled2 = fixture.debugElement.nativeElement;
  //       console.log('compiled2=----111', compiled2, document.URL);
  //     }, 1000);
      

  //   });
  // }));

  // it('should accept pin (with fakeAsync)', inject([TestComponentBuilder], fakeAsync((tcb) => {
  //   var fixture;
  //   tcb.createAsync(TestComponent).then((rootFixture) => {
  //     fixture = rootFixture
  //   });

  //   console.log('url', document.URL);
  //   tick();

  //   var compiled = fixture.debugElement.nativeElement;
  //   compiled.querySelector('#logInBtn').click();

  //   tick();

  //   fixture.detectChanges();
  //   var compiled2 = fixture.debugElement.nativeElement;

  //   console.log('compiled2=----111', compiled2 , compiled);
  // })));

});
