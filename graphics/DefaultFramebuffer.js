
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
		gl_context.bindFramebuffer(gl_context.FRAMEBUFFER, null);
		gl_context.clearColor(DefaultFramebuffer.r, DefaultFramebuffer.g, DefaultFramebuffer.b, DefaultFramebuffer.a);
		gl_context.clear(gl_context.COLOR_BUFFER_BIT);
	}
}

