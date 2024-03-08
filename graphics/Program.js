
class Program {
	constructor(gl) {
		const	program = gl.createProgram();

		gl.bindAttribLocation(program, 0, "position");
		this.id = program;
	}
	attach(gl, shader) {
		gl.attachShader(this.id, shader.id);
	}
	link(gl) {
		gl.linkProgram(this.id);
	}
	use(gl) {
		gl.useProgram(this.id);
	}
}