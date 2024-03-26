
class GraphicsContext {
	constructor(gl) {
		this.gl = gl;
		this.default_framebuffer = new Framebuffer(this.gl, 0);
	}
	getGL() {
		return (this.gl);
	}
	//Framebuffer
	//Program
	//Shader
	//Texture 2D, 2DArray
	/*
	VBO
	IBO,
	UBO

	*/
	createFramebuffer() {
		const id = this.gl.createFramebuffer();
		return (new Framebuffer(this.gl, id));
	}
	createProgram(vs, fs) {
		const id = this.gl.createProgram();
		return (new Program(this.gl, id, vs, fs));
	}
	createVertexShader(code) {
		const id = this.gl.createShader(this.gl.VERTEX_SHADER);
		this.gl.shaderSource(id, code);
		this.gl.compileShader(id);
		return (new VertexShader(this.gl, id));
	}
	createFragmentShader(code) {
		const id = this.gl.createShader(this.gl.FRAGMENT_SHADER);
		this.gl.shaderSource(id, code);
		this.gl.compileShader(id);
		return (new FragmentShader(this.gl, id));
	}
	createVertexArray() {
		const id = this.gl.createVertexArray();
		return (new VertexArray(this.gl, id));
	}
	createVertexBuffer(size, vertex_dimension, normalized) {
		const id = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, id);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, size, this.gl.STATIC_DRAW);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
		return (new VertexBuffer(this.gl, size, vertex_dimension, normalized))
	}
	createIndexBuffer(size) {
		const id = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, id);
		this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, size, this.gl.STATIC_DRAW);
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
		// return new
	}
	createUniformBuffer() {
		
	}
	createTexture2D(internal_format, width, height) {
		const id = this.gl.createTexture();
		this.gl.bindTexture(this.gl.TEXTURE_2D, id);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
		this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, internalformat, width, height);
		this.gl.bindTexture(this.gl.TEXTURE_2D, null);
		return (new Texture2D(this.gl, id, internal_format, width, height));
	}
	createTexture2DArray(internal_format, width, height, depth) {
		const id = this.gl.createTexture();
		
		this.gl.bindTexture(this.gl.TEXTURE_2D_ARRAY, id);
		this.gl.texParameteri(this.gl.TEXTURE_2D_ARRAY, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
		this.gl.texParameteri(this.gl.TEXTURE_2D_ARRAY, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
		this.gl.texStorage3D(this.gl.TEXTURE_2D_ARRAY, 1, internal_format, width, height, depth);
		this.gl.bindTexture(this.gl.TEXTURE_2D_ARRAY, null);
		return (new Texture2DArray(this.gl, id, internal_format, width, height, depth))
	}
}