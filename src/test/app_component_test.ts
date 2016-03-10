// import {
//   describe,
//   xdescribe,
//   it,
//   expect,
//   inject,
//   injectAsync,
//   TestComponentBuilder,
//   beforeEachProviders,
//   beforeEach
// } from 'angular2/testing';

// import {
//   provide,
//   ApplicationRef
// } from 'angular2/core';

// import {setBaseTestProviders} from 'angular2/testing';

// import {
//   TEST_BROWSER_PLATFORM_PROVIDERS,
//   TEST_BROWSER_APPLICATION_PROVIDERS
// } from 'angular2/platform/testing/browser';


// import { LoginComponent } from './../app/Component/login/login.component';

// import { Router, ROUTER_PROVIDERS, ROUTER_PRIMARY_COMPONENT, APP_BASE_HREF } from 'angular2/router';

// import {AppComponent} from './../app/app.component';

// import {MockApplicationRef} from 'angular2/src/mock/mock_application_ref';






// describe('Apppp', () => {


//   beforeEachProviders(() => [
//     ROUTER_PROVIDERS,
//     provide(APP_BASE_HREF, { useValue: '/' }),
//     provide(ROUTER_PRIMARY_COMPONENT, { useValue: AppComponent }),
//     provide(ApplicationRef, { useClass: MockApplicationRef })
//   ]);


//   setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

//   it('Apppp', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//     return tcb.createAsync(LoginComponent).then((fixture) => {
//       expect(true).toEqual(true);
//     });
//   }));

// });
