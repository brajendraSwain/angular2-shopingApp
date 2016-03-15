import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick } from 'angular2/testing';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { UserService } from './../app/services/user.service';



class MockUserService extends UserService {
	httpGetJson(url: string) {
		return Promise.resolve(url);
	}
}

describe('with mocked user', () => {
	beforeEachProviders(() => [HTTP_PROVIDERS, provide(UserService, { useClass: MockUserService })]);

	it('should get user url match', injectAsync([UserService], (service) => {
		return service.getUsers().then((url) => {
			expect(url).toEqual('sample/api/users');
		});
	}));
});