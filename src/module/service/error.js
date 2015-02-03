module.exports = function ( _status, _message ) {
	var cast = require( 'sc-cast' ),
		is = require( 'sc-is' ),
		error = new Error( cast( _message, 'string', 'An unknown error occurred.' ) );

	if ( is.a.number( _status ) ) error.status = _status;

	return error;
};