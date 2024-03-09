
class Buffer {
	constructor(gl, type, size, usage) {
		const	buffer = gl.createBuffer();
		const	data = new Float32Array([
			-1, -1, 0,
			1, -1, 0,
			1, 1, 0
		]);
		gl.bindBuffer(type, buffer);
		gl.bufferData(type, size, usage);
		gl.bindBuffer(type, null);

		this.id = buffer;
		this.type = type;
		this.size = size;
		this.usage = usage;
		this.gl = gl;
	}
	setData(dstByteOffset, srcData, srcOffset, size) {
		const length = size / srcData.BYTES_PER_ELEMENT;
		this._bind();
		this.gl.bufferSubData(this.type, dstByteOffset, srcData, srcOffset, length);
		this._unbind();
	}
	_bind() {
		this.gl.bindBuffer(this.type, this.id);
	}
	_unbind() {
		this.gl.bindBuffer(this.type, null);
	}
}