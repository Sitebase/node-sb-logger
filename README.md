Logger
======

Simple logging class to add command line logging in colors.

Usage
-----

You can use the sb-logger as follow:

	var logger = require('sb-logger');
	logger.log('Hello world');
	logger.error('Hello world');
	logger.warn('Hello world');
	logger.warn({'test': 'ok'});
	logger.debug(['Hello world']);