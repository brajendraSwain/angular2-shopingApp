import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick } from 'angular2/testing';
import { provide } from 'angular2/core';

import { UserService } from './../app/services/user.service';



class MockUserService extends UserService {
	getJSON(url: string) {
		return Promise.resolve(true);
	}
}

describe('with mocked user', () => {
	beforeEachProviders(() => [provide(UserService, { useClass: MockUserService })]);

	it('should greet', injectAsync([UserService], (service) => {
		return service.getUsers().then((users) => {
			debugger;
			expect(users).toEqual(true);
		});
	}));
});