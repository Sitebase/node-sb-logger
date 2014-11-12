var assert = require('assert'),
	logger = require('../src/index.js');

// Unit tests will come soon !!!!!

describe('Logger',function(){

	it( 'Test', function() {
		logger.log('Hello world');
		logger.error('Hello world');
		logger.warn('Hello world');
		logger.warn({'test': 'ok'});
		logger.debug('Hello world');
	});

	it( 'Log level', function() {
		logger.setLevel( [logger.LEVELS.ERROR, logger.LEVELS.WARN] );
		logger.log('Skip this');
		logger.error('Show this');
		logger.warn('Show this');
	});

});