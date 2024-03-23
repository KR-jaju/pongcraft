
/*
internalFormat - format table
https://registry.khronos.org/webgl_context/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE
*/
class Texture2D {
	constructor(internalformat, width, height) {
		const	texture = gl_context_context.createTexture();
		
		gl_context.bindTexture(gl_context.TEXTURE_2D, texture);
		gl_context.texParameteri(gl_context.TEXTURE_2D, gl_context.TEXTURE_MIN_FILTER, gl_context.LINEAR);
		gl_context.texParameteri(gl_context.TEXTURE_2D, gl_context.TEXTURE_MAG_FILTER, gl_context.LINEAR);
		gl_context.texStorage2D(gl_context.TEXTURE_2D, 1, internalformat, width, height);
		gl_context.bindTexture(gl_context.TEXTURE_2D, null);

		this.id = texture;
	}
	setData(bitmap) {
		this._bind();
		gl_context.texSubImage2D(gl_context.TEXTURE_2D, 0, 0, 0, bitmap.width, bitmap.height, gl_context.RGBA, gl_context.UNSIGNED_BYTE, bitmap.data);
		this._unbind();
	}
	_bind() {
		gl_context.bindTexture(gl_context.TEXTURE_2D, this.id);
	}
	_unbind() {
		gl_context.bindTexture(gl_context.TEXTURE_2D, null);
	}
	static from(gl_context, src) {
		
	}
}