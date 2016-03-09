import {
  iit,
  it,
  ddescribe,
  describe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders,
  fakeAsync,
  tick
} from 'angular2/testing';
import { provide } from 'angular2/core';

import { UserService } from './../app/services/user.service';
import { LoginComponent } from './../app/Component/login/login.component';


class MockUserService extends UserService {
  getJSON(url: string) {
    return Promise.resolve(true);
  }
}

describe('Log in component', () => {
  beforeEachProviders(() => [
    provide(UserService, { useClass: MockUserService }),
    UserService
  ]);

  it('Should have a login button', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(LoginComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('#logInBtn')).toHaveText('Sign In');
    });
  }));
});
