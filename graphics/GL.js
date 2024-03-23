
let gl_canvas = null;
let	gl_context = null;

function initGL(canvas){
	gl_canvas = canvas;
	gl_context = gl_canvas.getContext("webgl2");
}