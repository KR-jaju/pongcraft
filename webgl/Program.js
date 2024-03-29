
class Program {
	static attribute_location = {
		"position": 0,
		"uv": 1
	};
	constructor(gl, id, vs, fs) {
		this.gl = gl;
		this.id = id;

		for (const attribute in Program.attribute_location) {
			const	location = Program.attribute_location[attribute];
			this.gl.bindAttribLocation(id, location, attribute);
		}
		this.gl.atttachShader(this.id, vs.id);
		this.gl.atttachShader(this.id, fs.id);
		this.gl.linkProgram(this.id);
	}
	use() {
		this.gl.useProgram(this.id);
	}
	unuse() {
		this.gl.useProgram(null);
	}
}