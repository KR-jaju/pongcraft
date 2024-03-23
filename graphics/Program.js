
class Program {
	static attribute_location = {
		"position": 0,
		"uv": 1
	};
	constructor() {
		const	program = gl_context.createProgram();

		for (const attribute in Program.attribute_location) {
			const	location = Program.attribute_location[attribute];
			gl_context.bindAttribLocation(program, location, attribute);
		}
		this.id = program;
	}
	attach(shader) {
		gl_context.attachShader(this.id, shader.id);
	}
	link() {
		gl_context.linkProgram(this.id);
	}
	use() {
		gl_context.useProgram(this.id);
	}
}