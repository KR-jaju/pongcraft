
class VertexBuffer {
	constructor(buffer, size, type, normalized, stride = 0, offset = 0) {
		this.buffer = buffer;
		this.size = size;
		this.type = type;
		this.normalized = normalized;
		this.stride = stride;
		this.offset = offset;
	}
	_bind(idx) {
		this.buffer._bind();
		gl_context.enableVertexAttribArray(idx);
		gl_context.vertexAttribPointer(idx, this.size, this.type, this.normalized, this.stride, this.offset);
	}
}
//gl.bindBuffer(buffer);
// Webgl.buffer = buffer;