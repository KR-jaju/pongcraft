
class Program {
	static attribute_location = {
		"position": 0,
		"uv": 1
	};
	constructor(gl, id, vs, fs) {
		this.gl = gl;

		for (const attribute in Program.attribute_location) {
			const	location = Program.attribute_location[attribute];
			this.gl.bindAttribLocation(id, location, attribute);
		}
		this.id = id;
		this.gl.atttachShader(this.id, vs.id);
		this.gl.atttachShader(this.id, fs.id);
		this.gl.linkProgram(this.id);
	}
	_use() {
		this.gl.useProgram(this.id);
	}
	_unuse() {
		this.gl.useProgram(null);
	}
}