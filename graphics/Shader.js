
/*

1. vs, fs -> program
2. vbo, vao
3. use, draw
*/

/*
let	shader_id;
*/

class Shader {
	constructor(gl, type) {
		const shader = gl.createShader(type);

		this.id = shader;
	}
	shaderSource(gl, source) {
		gl.shaderSource(this.id, source);
	}
	compile(gl) {
		gl.compileShader(this.id);
		console.log(gl.getShaderInfoLog(this.id));
	}
}
