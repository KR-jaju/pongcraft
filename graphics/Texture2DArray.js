
class Texture2DArray {
	constructor(gl, internalformat, width, height, depth) {
		const	texture = gl.createTexture();

		gl.bindTexture(gl.TEXTURE_2D_ARRAY, texture);
		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, internalformat, width, height, depth);
		gl.bindTexture(gl.TEXTURE_2D_ARRAY, null);

		this.gl = gl;
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
