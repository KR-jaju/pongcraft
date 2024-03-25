
class Program {
	static attribute_location = {
		"position": 0,
		"uv": 1
	};
	constructor(gc) {
		this.gl = gc.getGL();
		const	program = this.gl.createProgram();

		for (const attribute in Program.attribute_location) {
			const	location = Program.attribute_location[attribute];
			this.gl.bindAttribLocation(program, location, attribute);
		}
		this.id = program;
	}
	attach(shader) {
		this.gl.attachShader(this.id, shader.id);
	}
	link() {
		this.gl.linkProgram(this.id);
	}
	use() {
		this.gl.useProgram(this.id);
	}
}