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


});