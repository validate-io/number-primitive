/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isNumber = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-number-primitive', function tests() {

	it( 'should export a function', function test() {
		expect( isNumber ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isNumber( Math.PI );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			new Number( 5 ),
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isNumber( value );
		}
	});

});
