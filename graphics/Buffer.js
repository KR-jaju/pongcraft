
class Buffer {
	constructor(gl, type, size, usage) {
		const	buffer = gl.createBuffer();
		gl.bindBuffer(type, buffer);
		gl.bufferData(type, size, usage);
		gl.bindBuffer(type, null);

		this.id = buffer;
		this.type = type;
		this.size = size;
		this.usage = usage;
	}
	setData(gl, dstByteOffset, srcData, srcOffset, length) {
		this._bind(gl);

		gl.bufferData(this.type, srcData, this.usage);
		// gl.bufferSubData(this.type, dstByteOffset, srcData, srcOffset);
		// , 9);
		this._unbind(gl);
	}
	_bind(gl) {
		gl.bindBuffer(this.type, this.id);
	}
	_unbind(gl) {
		gl.bindBuffer(this.type, null);
	}
}