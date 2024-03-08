
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
		// gl.bufferData(type, data, usage);
		gl.bindBuffer(type, null);

		this.id = buffer;
		this.type = type;
		this.size = size;
		this.usage = usage;
	}
	setData(gl, dstByteOffset, srcData, srcOffset, size) {
		const length = size / srcData.BYTES_PER_ELEMENT;
		this._bind(gl);
		gl.bufferSubData(this.type, dstByteOffset, srcData, srcOffset, length);
		this._unbind(gl);
	}
	_bind(gl) {
		gl.bindBuffer(this.type, this.id);
	}
	_unbind(gl) {
		gl.bindBuffer(this.type, null);
	}
}