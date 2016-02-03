/*
 * sb-logger
 *
 * Copyright (c) 2014 Sitebase (Wim Mostmans) and project contributors.
 *
 * sb-logger's license follows:
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This license applies to all parts of sb-logger that are not externally
 * maintained libraries.
 */
var colors = require('colors');
var levels = 'error|warn|debug|log';

function log(level, args) {

	if( args.length === 0 )
		return;

	var prefix = "INFO".cyan + " - ";

	if( levels.indexOf( level ) === -1 )
		return;

	// Determine color to use
	if( level === 'error' ) prefix = "ERROR".red + " - ";
	if( level === 'warn' ) prefix = "WARN".yellow + " - ";
	if( level === 'debug' ) prefix = "DEBUG".green + " - ";

	// Add prefix as first argument
	args.unshift( prefix );

	console.log.apply( this, args );
}


/**
 * We used to use `arguments.callee.caller` to retrieve the level,
 * this however is being removed so we use a wrapper that contains
 * the level.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee
 */
function _level(level) {
    return function() {
        // Simply passing arguments is an optimization killer for V8
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = [];
        var args_i = arguments.length;
        while( args_i-- ) args[args_i] = arguments[args_i];

        return log(level, args);
    }
};

function setLevel( value )
{
	levels = value.join( '|' );
}

module.exports = {
	log: _level('log'),
	error: _level('error'),
	warn: _level('warn'),
	debug: _level('debug'),
	setLevel: setLevel,
	LEVELS: {
		ERROR: 'error',
		WARN: 'warn',
		DEBUG: 'debug',
		LOG: 'log'
	}
};
