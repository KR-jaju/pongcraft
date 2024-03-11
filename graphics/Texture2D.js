
/*
internalFormat - format table
https://registry.khronos.org/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE
*/
class Texture2D {
	constructor(gl, internalformat, width, height, format, type) {
		const	texture = gl.createTexture();
		
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texStorage2D(gl.TEXTURE_2D, 1, internalformat, width, height);
		gl.bindTexture(gl.TEXTURE_2D, null);

		this.gl = gl;
		this.id = texture;
	}
	setData(image) {
		this._bind();
		this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
		this._unbind();
	}
	_bind() {
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.id);
	}
	_unbind() {
		this.gl.bindTexture(this.gl.TEXTURE_2D, null);
	}
	static from(gl, src) {
		
	}
}