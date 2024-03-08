
class VertexArray {
	constructor(gl) {
		const vertex_array = gl.createVertexArray();
		
		this.id = vertex_array;
	}
	attach(gl, vbo, idx) {
		gl.bindVertexArray(this.id);
		vbo._bind(gl, idx);
		gl.bindVertexArray(null);
	}
	_bind(gl) {
		gl.bindVertexArray(this.id);
	}
	_unbind(gl) {
		gl.bindVertexArray(null);
	}
}