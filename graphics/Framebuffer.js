
class Framebuffer {
	constructor(gl) {
		const framebuffer = gl.createFramebuffer();
	
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
	clearColor(gl) {
		gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
		gl.clearColor(this.r, this.g, this.b, this.a);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	}
}