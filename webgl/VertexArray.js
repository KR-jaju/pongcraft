
class VertexArray {
	constructor(gl, id) {
		this.gl = gl;
		this.id = id;
	}
	attach(vbo, idx) {
		this.gl.bindVertexArray(this.id);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo.id);
		this.gl.enableVertexAttribArray(idx);
		this.gl.vertexAttribPointer(id, vbo.vertex_dimension, this.gl.FLOAT, vbo.normalized, 0, 0);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
		this.gl.bindVertexArray(null);
	}
	_bind() {
		this.gl.bindVertexArray(this.id);
	}
	_unbind() {
		this.gl.bindVertexArray(null);
	}
}