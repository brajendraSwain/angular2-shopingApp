System.register(['angular2/testing', 'angular2/core', './../app/services/user.service', './../app/Component/login/login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var testing_1, core_1, user_service_1, login_component_1;
    var MockUserService;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            MockUserService = (function (_super) {
                __extends(MockUserService, _super);
                function MockUserService() {
                    _super.apply(this, arguments);
                }
                MockUserService.prototype.getJSON = function (url) {
                    return Promise.resolve(true);
                };
                return MockUserService;
            }(user_service_1.UserService));
            testing_1.describe('Log in component', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(user_service_1.UserService, { useClass: MockUserService }),
                    user_service_1.UserService
                ]; });
                testing_1.it('Should have a login button', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(login_component_1.LoginComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled.querySelector('#logInBtn')).toHaveText('Sign In');
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=login_component_test.js.map