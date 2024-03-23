
class Framebuffer {
	constructor() {
		const framebuffer = gl_context.createFramebuffer();
	
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
		gl_context.bindFramebuffer(gl_context.FRAMEBUFFER, this.id);
		gl_context.clearColor(this.r, this.g, this.b, this.a);
		gl_context.clear(gl_context.COLOR_BUFFER_BIT);
		gl_context.bindFramebuffer(gl_context.FRAMEBUFFER, null);
	}
}