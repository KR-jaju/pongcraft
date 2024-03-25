
class Texture2DArray {
	constructor(gl, internalformat, width, height, depth) {
		this.gl = gl;
		const	texture = this.gl_context.createTexture();

		this.gl.bindTexture(this.gl.TEXTURE_2D_ARRAY, texture);
		this.gl.texParameteri(this.gl.TEXTURE_2D_ARRAY, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
		this.gl.texParameteri(this.gl.TEXTURE_2D_ARRAY, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
		this.gl.texStorage3D(this.gl.TEXTURE_2D_ARRAY, 1, internalformat, width, height, depth);
		this.gl.bindTexture(this.gl.TEXTURE_2D_ARRAY, null);

		this.id = texture;
		this.width = width;
		this.height = height;
		this.depth = depth;
	}
	setData(idx, bitmap) {
		this._bind();
		this.gl.texSubImage3D(this.gl.TEXTURE_2D_ARRAY, 0, 0, 0, idx, bitmap.width, bitmap.height, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, bitmap.data);
		this._unbind();
	}
	_bind() {
		this.gl.bindTexture(this.gl.TEXTURE_2D_ARRAY, this.id);
	}
	_unbind() {
		this.gl.bindTexture(this.gl.TEXTURE_2D_ARRAY, null);
	}
}
