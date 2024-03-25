
class DefaultFramebuffer {
	static	r = 0;
	static	g = 0;
	static	b = 0;
	static	a = 0;

	static setClearColor(r, g, b, a) {
		DefaultFramebuffer.r = r;
		DefaultFramebuffer.g = g;
		DefaultFramebuffer.b = b;
		DefaultFramebuffer.a = a;
	}
	static clearColor() {
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
		this.gl.clearColor(DefaultFramebuffer.r, DefaultFramebuffer.g, DefaultFramebuffer.b, DefaultFramebuffer.a);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	}
}

