
/*
internalFormat - format table
https://registry.khronos.org/webthis.gl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE
*/
class Texture2D {
	constructor(gl, id, internalformat, width, height) {
		this.gl = gl;
		this.id = id;
		this.width = width;
		this.height = height;
	}
	setData(bitmap) { // 삭제 예정
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
	static from(gl, src) { // 이것도 삭제 예정
		
	}
}