
class VertexBuffer {
	constructor(gl, id, size, vertex_dimension, normalized) {
		this.gl = gl;
		this.id = id;
		this.size = size;
		this.vertex_dimension = vertex_dimension;
		this.normalized = normalized;
	}
	setData(dstOffset, srcData, srcOffset, size) {
		const length = size / srcData.BYTES_PER_ELEMENT;
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.id);
		this.gl.bufferSubData(this.gl.ARRAY_BUFFER, dstOffset, srcData, srcOffset, length);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, 0);
	}
}