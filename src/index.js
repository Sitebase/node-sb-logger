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

function log() {

	if( arguments.length === 0 ) 
		return;

	var prefix = "INFO".cyan + " - ";
	var caller = arguments.callee.caller;

	// Determine color to use
	if( caller === error ) prefix = "ERROR".red + " - ";
	if( caller === warn ) prefix = "WARN".yellow + " - ";
	if( caller === debug ) prefix = "DEBUG".green + " - ";

	// Add prefix as first argument
	var data = Array.prototype.slice.apply( arguments );
	data.unshift( prefix );

	console.log.apply( this, data );
}

function error() { log.apply(this, arguments); }
function warn() { log.apply(this, arguments); }
function debug() { log.apply(this, arguments); }

module.exports = {
	log: log,
	error: error,
	warn: warn,
	debug: debug,
};