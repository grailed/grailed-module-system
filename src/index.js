module.exports = function ( _name, _options ) {
	return require( 'grailed-module-adapter' )( __dirname, _name || 'system', _options );
};