
class VertexArray {
	constructor() {
		const vertex_array = gl_context.createVertexArray();
		
		this.id = vertex_array;
	}
	attach(vbo, idx) {
		gl_context.bindVertexArray(this.id);
		vbo._bind(idx);
		gl_context.bindVertexArray(null);
	}
	_bind() {
		gl_context.bindVertexArray(this.id);
	}
	_unbind() {
		gl_context.bindVertexArray(null);
	}
}