
class Texture2DArray {
	constructor(internalformat, width, height, depth) {
		const	texture = gl_context_context.createTexture();

		gl_context.bindTexture(gl_context.TEXTURE_2D_ARRAY, texture);
		gl_context.texParameteri(gl_context.TEXTURE_2D_ARRAY, gl_context.TEXTURE_MIN_FILTER, gl_context.LINEAR);
		gl_context.texParameteri(gl_context.TEXTURE_2D_ARRAY, gl_context.TEXTURE_MAG_FILTER, gl_context.LINEAR);
		gl_context.texStorage3D(gl_context.TEXTURE_2D_ARRAY, 1, internalformat, width, height, depth);
		gl_context.bindTexture(gl_context.TEXTURE_2D_ARRAY, null);

		this.id = texture;
		this.width = width;
		this.height = height;
		this.depth = depth;
	}
	setData(idx, bitmap) {
		this._bind();
		gl_context.texSubImage3D(gl_context.TEXTURE_2D_ARRAY, 0, 0, 0, idx, bitmap.width, bitmap.height, 1, gl_context.RGBA, gl_context.UNSIGNED_BYTE, bitmap.data);
		this._unbind();
	}
	_bind() {
		gl_context.bindTexture(gl_context.TEXTURE_2D_ARRAY, this.id);
	}
	_unbind() {
		gl_context.bindTexture(gl_context.TEXTURE_2D_ARRAY, null);
	}
}
