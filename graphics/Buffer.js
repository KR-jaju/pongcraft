
class Buffer {
	constructor(gc, type, size, usage) {
		this.gl = gc.getGL();
		const	buffer = this.gl.createBuffer();
		this.gl.bindBuffer(type, buffer);
		this.gl.bufferData(type, size, usage);
		this.gl.bindBuffer(type, null);

		this.id = buffer;
		this.type = type;
		this.size = size;
		this.usage = usage;
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