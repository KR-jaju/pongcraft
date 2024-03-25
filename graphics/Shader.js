
/*

1. vs, fs -> program
2. vbo, vao
3. use, draw
*/

/*
let	shader_id;
*/

class Shader {
	constructor(gc, type) {
		this.gl = gc.getGL();
		const shader = this.gl.createShader(type);

		this.id = shader;
	}
	shaderSource(source) {
		this.gl.shaderSource(this.id, source);
	}
	compile() {
		this.gl.compileShader(this.id);
		console.log(this.gl.getShaderInfoLog(this.id));
	}
}
