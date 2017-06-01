// @flow
import detox from 'detox';
import config from '../package.json';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

/**
 * If we are running `e2e` tests, we want to setup and configure
 * detox
 */
if (process.argv[2].includes('__e2e__')) {
	beforeAll(async () => {
		await detox.init(config.detox);
	});

	afterAll(async () => {
		await detox.cleanup();
	});
}
