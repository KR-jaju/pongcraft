
class Mesh {
	constructor(gl, indices) {
		const	vertex_count = Math.max(...indices) + 1; // maybe slow
		const	vertex_array = new VertexArray(gl);
		const	index_count = indices.length;
		const	index_data = new Int32Array(indices);
		const	index_buffer = new Buffer(gl, gl.ELEMENT_ARRAY_BUFFER, index_count * 4, gl.STATIC_DRAW);

		index_buffer.setData(0, index_data, 0, index_count * 4);
		vertex_array._bind();
		index_buffer._bind();
		vertex_array._unbind();
		this.vertex_array = vertex_array;
		this.index_count = index_count;
		this.index_data = index_data;
		this.index_buffer = index_buffer;
		this.vertex_count = vertex_count;
		this.gl = gl;
	}
	attach(attrib_name, vertex_buffer) {
		if (!(attrib_name in Program.attribute_location))
			throw new Error("Undefined attribute name");
		const location = Program.attribute_location[attrib_name];
		this.vertex_array._bind();
		vertex_buffer._bind(location);
		this.vertex_array._unbind();
	}
	draw(program) {
		const	mode = this.gl.TRIANGLES;
		const	count = this.index_count;
		const	type = this.gl.UNSIGNED_INT;
		const	offset = 0;
	
		program.use();
		this.vertex_array._bind();
		// this.gl.drawElements(mode, count, type, offset);
		this.gl.drawElements(mode, count, type, offset);
		this.vertex_array._unbind();
	}
	//Mesh.from(gl, [a, b, c])
	static from(gl, vertex_buffers, indices) {
		const	mesh = new Mesh(gl, indices);
		for (let attrib_name in vertex_buffers)
			mesh.attach(attrib_name, vertex_buffers[attrib_name]);
		return (mesh);
	}
}