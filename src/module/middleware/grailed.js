module.exports = function ( _req, _res, _next ) {
	_res.grailed = _req.grailed = global.grailed;
	_next();
};