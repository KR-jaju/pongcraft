
class Framebuffer {
	constructor(gl, id) {
		this.gl = gl;
		this.id = id;
	}
	clearColor(r = 0.4, g = 0.4, b = 0.4, a = 1.0) {
		this._bind();
		this.gl.clearColor(r, g, b, a);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		this._unbind();
	}
	clearDepth(depth = 1.0) {
		this._bind();
		this.gl.clearDepth(depth);
		this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
		this._unbind();
	}
	draw(vertex_array, vertex_count, program) {
		this._bind();
		program._use();
		vertex_array._bind();
		this.gl.drawElements(this.gl.GL_TRIANGLES, vertex_count, this.gl.UNSIGNED_INT, 0);
		vertex_array._unbind();
		program._unuse();
		this._unbind();
	}
	_bind() {
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.id);
	}
	_unbind() {
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	}
}