
class VertexBuffer {
	constructor(gl, buffer, size, type, normalized, stride = 0, offset = 0) {
		this.buffer = buffer;
		this.size = size;
		this.type = type;
		this.normalized = normalized;
		this.stride = stride;
		this.offset = offset;
	}
	_bind(gl, idx) {
		this.buffer._bind(gl);
		gl.enableVertexAttribArray(idx);
		gl.vertexAttribPointer(idx, this.size, this.type, this.normalized, this.stride, this.offset);
	}
}
//gl.bindBuffer(buffer);
// Webgl.buffer = buffer;