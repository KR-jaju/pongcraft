
/*
internalFormat - format table
https://registry.khronos.org/webthis.gl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE
*/
class Texture2D {
	constructor(gl, internalformat, width, height) {
		this.gl = gl;
		const	texture = this.gl.createTexture();
		
		this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
		this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, internalformat, width, height);
		this.gl.bindTexture(this.gl.TEXTURE_2D, null);

		this.id = texture;
	}
	setData(bitmap) {
		this._bind();
		this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, bitmap.width, bitmap.height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, bitmap.data);
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