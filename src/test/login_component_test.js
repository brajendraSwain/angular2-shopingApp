System.register(['angular2/testing', 'angular2/core', 'angular2/platform/testing/browser', './../app/Component/login/login.component', 'angular2/router', './../app/app.component', 'angular2/src/mock/mock_application_ref'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, core_1, testing_2, browser_1, login_component_1, router_1, app_component_1, mock_application_ref_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
                testing_2 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (mock_application_ref_1_1) {
                mock_application_ref_1 = mock_application_ref_1_1;
            }],
        execute: function() {
            testing_1.describe('Log in component', function () {
                testing_1.beforeEachProviders(function () { return [
                    router_1.ROUTER_PROVIDERS,
                    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
                    core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: app_component_1.AppComponent }),
                    core_1.provide(core_1.ApplicationRef, { useClass: mock_application_ref_1.MockApplicationRef })
                ]; });
                testing_2.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
                testing_1.it('log in button should be there', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(login_component_1.LoginComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled.querySelector('#logInBtn')).toHaveText('Sign In');
                    });
                }));
                testing_1.it('register in button should be there', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(login_component_1.LoginComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled.querySelector('#registerBtn')).toHaveText("Don't have an account");
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=login_component_test.js.map