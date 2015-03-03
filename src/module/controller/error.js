module.exports = {
	404: function ( _req, _res, _next ) {
		switch ( _req.headers.accept ) {
		case 'application/json':
			_res.status( 404 ).send( '{"error":{"message":"Page not found. ¯\\_(ʘ_ʘ)_/¯","status":404}}' );
			break;
		case 'text/plain':
			_res.status( 404 ).send( 'Page not found. ¯\\_(ʘ_ʘ)_/¯' );
			break;
		default:
			_res.status( 404 ).render( '404.ejs' );

		}
	}
};