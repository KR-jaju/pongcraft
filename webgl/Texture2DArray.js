
class Texture2DArray {
	constructor(gl, id, internalformat, width, height, depth) {
		this.gl = gl;
		this.id = id;
		this.width = width;
		this.height = height;
		this.depth = depth;
	}
	setData(idx, bitmap) {//삭제 예정
		this.bind();
		this.gl.texSubImage3D(this.gl.TEXTURE_2D_ARRAY, 0, 0, 0, idx, bitmap.width, bitmap.height, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, bitmap.data);
		this.unbind();
	}
	bind() {
		this.gl.bindTexture(this.gl.TEXTURE_2D_ARRAY, this.id);
	}
	unbind() {
		this.gl.bindTexture(this.gl.TEXTURE_2D_ARRAY, null);
	}
}
