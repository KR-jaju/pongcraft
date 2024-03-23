
/*

1. vs, fs -> program
2. vbo, vao
3. use, draw
*/

/*
let	shader_id;
*/

class Shader {
	constructor(type) {
		const shader = gl_context.createShader(type);

		this.id = shader;
	}
	shaderSource(source) {
		gl_context.shaderSource(this.id, source);
	}
	compile() {
		gl_context.compileShader(this.id);
		console.log(gl_context.getShaderInfoLog(this.id));
	}
}
