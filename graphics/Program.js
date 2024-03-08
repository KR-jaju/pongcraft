
class Program {
	constructor(gl) {
		const	program = gl.createProgram();

		this.id = program;
	}
	attach(gl, shader) {
		gl.attachShader(this.id, shader.id);
	}
	link(gl) {
		gl.linkProgram(this.id);
		console.log("program:" + gl.getProgramInfoLog(this.id));
	}
	use(gl) {
		gl.useProgram(this.id);
	}
}