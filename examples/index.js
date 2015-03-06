'use strict';

var isNumber = require( './../lib' );

console.log( isNumber( Math.PI ) );
// returns true

console.log( isNumber( NaN ) );
// returns false

console.log( isNumber( new Number( 5 ) ) );
// returns false

console.log( isNumber( '5' ) );
// returns false
