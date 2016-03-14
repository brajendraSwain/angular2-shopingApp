import {setBaseTestProviders, resetBaseTestProviders} from 'angular2/testing';

import {
	TEST_BROWSER_PLATFORM_PROVIDERS,
	TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

export class BasicTestSetup {
	static isInitialized: boolean;

	initialSetup(){
		if(BasicTestSetup.isInitialized){
			return;
		}
		BasicTestSetup.isInitialized = true;
		// reflector.reflectionCapabilities = new ReflectionCapabilities();
		setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);
		// beforeEach configuration:
		// - clear the bindings before each test,
		// - collect the bindings before each test, see beforeEachProviders(),
		// - create the test injector to be used in beforeEach() and it()

		// gns.beforeEach(() {
		// 	_testInjector.reset();
		// 	_currentTestFuture = null;
		// });

		// var completerProvider = bind(AsyncTestCompleter).toFactory(() {
		// 	// Mark the test as async when an AsyncTestCompleter is injected in an it(),
		// 	if (!_inIt) throw 'AsyncTestCompleter can only be injected in an "it()"';
		// 	_isCurrentTestAsync = true;
		// 	return new AsyncTestCompleter();
		// });

		// gns.beforeEach(() {
		// 	_isCurrentTestAsync = false;
		// 	_testInjector.addProviders([completerProvider]);
		// });
	}
};