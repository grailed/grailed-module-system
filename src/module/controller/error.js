module.exports = {
	404: function ( _req, _res, _next ) {
		_res.status( 404 ).render( '404.ejs' );
	}
};