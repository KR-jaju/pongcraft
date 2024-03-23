
class Mesh {
	constructor(indices) {
		const	vertex_count = Math.max(...indices) + 1; // maybe slow
		const	vertex_array = new VertexArray();
		const	index_count = indices.length;
		const	index_data = new Int32Array(indices);
		const	index_buffer = new Buffer(gl_context.ELEMENT_ARRAY_BUFFER, index_count * 4, gl_context.STATIC_DRAW);

		index_buffer.setData(0, index_data, 0, index_count * 4);
		vertex_array._bind();
		index_buffer._bind();
		vertex_array._unbind();
		this.vertex_array = vertex_array;
		this.index_count = index_count;
		this.index_data = index_data;
		this.index_buffer = index_buffer;
		this.vertex_count = vertex_count;
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
		const	mode = gl_context.TRIANGLES;
		const	count = this.index_count;
		const	type = gl_context.UNSIGNED_INT;
		const	offset = 0;
	
		program.use();
		this.vertex_array._bind();
		// gl_context.drawElements(mode, count, type, offset);
		gl_context.drawElements(mode, count, type, offset);
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