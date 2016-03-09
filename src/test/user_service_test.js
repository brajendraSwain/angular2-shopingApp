System.register(['angular2/testing', 'angular2/core', './../app/services/user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var testing_1, core_1, user_service_1;
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
            testing_1.describe('with mocked user', function () {
                testing_1.beforeEachProviders(function () { return [core_1.provide(user_service_1.UserService, { useClass: MockUserService })]; });
                testing_1.it('should greet', testing_1.injectAsync([user_service_1.UserService], function (service) {
                    return service.getUsers().then(function (users) {
                        debugger;
                        testing_1.expect(users).toEqual(true);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=user_service_test.js.map