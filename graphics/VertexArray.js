
class VertexArray {
	constructor(gc) {
		this.gl = gc.getGL();
		const vertex_array = this.gl.createVertexArray();
		
		this.id = vertex_array;
	}
	attach(vbo, idx) {
		this.gl.bindVertexArray(this.id);
		vbo._bind(idx);
		this.gl.bindVertexArray(null);
	}
	_bind() {
		this.gl.bindVertexArray(this.id);
	}
	_unbind() {
		this.gl.bindVertexArray(null);
	}
}