
class VertexBuffer {
	constructor(gl, buffer, size, type, normalized, stride = 0, offset = 0) {
		this.buffer = buffer;
		this.size = size;
		this.type = type;
		this.normalized = normalized;
		this.stride = stride;
		this.offset = offset;
		this.gl = gl;
	}
	_bind(idx) {
		this.buffer._bind();
		this.gl.enableVertexAttribArray(idx);
		this.gl.vertexAttribPointer(idx, this.size, this.type, this.normalized, this.stride, this.offset);
	}
}
//gl.bindBuffer(buffer);
// Webgl.buffer = buffer;