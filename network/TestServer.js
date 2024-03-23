
class TestServer {
	constructor() {
		this.table = {};
	}
	allocate(allocator, id) {
		this.table[id] = {
			allocator: allocator,
			data: {}
		};
	}
	assign(allocator, id, value) {
		if (this.table[id].allocator)
	}
}