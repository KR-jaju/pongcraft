
class Buffer {
	constructor(type, size, usage) {
		const	buffer = gl_context.createBuffer();
		gl_context.bindBuffer(type, buffer);
		gl_context.bufferData(type, size, usage);
		gl_context.bindBuffer(type, null);

		this.id = buffer;
		this.type = type;
		this.size = size;
		this.usage = usage;
	}
	setData(dstByteOffset, srcData, srcOffset, size) {
		const length = size / srcData.BYTES_PER_ELEMENT;
		this._bind();
		gl_context.bufferSubData(this.type, dstByteOffset, srcData, srcOffset, length);
		this._unbind();
	}
	_bind() {
		gl_context.bindBuffer(this.type, this.id);
	}
	_unbind() {
		gl_context.bindBuffer(this.type, null);
	}
}