var Texture = require('kami-texture');

module.exports = function(gl) {
	return new Texture(gl, {
		width: 1,
		height: 1,
		data: new Uint8Array([255,255,255,255]),
		format: Texture.Format.RGBA
	});
};