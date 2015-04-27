module.exports = function ( _status, _message, _options ) {
	var cast = require( 'sc-cast' ),
		is = require( 'sc-is' ),
		error = new Error( cast( _message, 'string', 'An unknown error occurred.' ) );

	if ( is.a.number( _status ) ) error.status = _status;
	if ( _options ) error.options = _options;

	return error;
};