
class Framebuffer {
	constructor(gl, id) {
		this.gl = gl;
		this.id = id;
	}
	clearColor(r = 0.4, g = 0.4, b = 0.4, a = 1.0) {
		this.bind();
		this.gl.clearColor(r, g, b, a);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		this.unbind();
	}
	clearDepth(depth = 1.0) {
		this.bind();
		this.gl.clearDepth(depth);
		this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
		this.unbind();
	}
	draw(vertex_array, vertex_count, program) {
		this.bind();
		program.use();
		vertex_array.bind();
		this.gl.drawElements(this.gl.GL_TRIANGLES, vertex_count, this.gl.UNSIGNED_INT, 0);
		vertex_array.unbind();
		program.unuse();
		this.unbind();
	}
	bind() {
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.id);
	}
	unbind() {
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	}
}