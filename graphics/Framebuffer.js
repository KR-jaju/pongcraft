
class Framebuffer {
	constructor(gl) {
		this.gl = gl;
		const framebuffer = this.gl.createFramebuffer();
	
		this.id = framebuffer;
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.a = 1;
	}
	setClearColor(r, g, b, a) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
	clearColor() {
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.id);
		this.gl.clearColor(this.r, this.g, this.b, this.a);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	}
}