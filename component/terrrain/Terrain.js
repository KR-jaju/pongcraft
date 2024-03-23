
class Terrain {
	constructor(entity) {
		this.chunks = {};
	}
	// setBlock(x, y, z, id) {
	// 	const cx = Math.floor(x / Chunk.SIZE);
	// 	const cy = Math.floor(y / Chunk.SIZE);
	// 	const cz = Math.floor(z / Chunk.SIZE);
	// 	const chunk = this.getChunk(cx, cy, cz);
	// 	// if (chunk == null)
	// 	chunk.setBlock(x - cx * Chunk.SIZE, y - cy * Chunk.SIZE, z - cz * Chunk.SIZE, id);
	// }
	getBlock(x, y, z) {
		const cx = Math.floor(x / Chunk.SIZE);
		const cy = Math.floor(y / Chunk.SIZE);
		const cz = Math.floor(z / Chunk.SIZE);
		const chunk = this.getChunk(cx, cy, cz);
		if (chunk == null)
			return (0);
		return (chunk.getBlock(x - cx * Chunk.SIZE, y - cy * Chunk.SIZE, z - cz * Chunk.SIZE));
	}
	getChunk(cx, cy, cz) {
		const	key = `${cx},${cy},${cz}`;
		if (this.chunks.hasOwnProperty(key))
			return (this.chunks[key]);
		return (null);
	}
	setChunk(cx, cy, cz, chunk) {
		const	key = `${cx},${cy},${cz}`;
		this.chunks[key] = chunk;
		for (let i = 0; i < 6; ++i) {
			let neighbor = this.getChunk(cx + Direction.x[i], cy + Direction.y[i], cz + Direction.z[i]);
			if (neighbor == null)
				continue;
			chunk.neighbor[i] = neighbor;
			neighbor.neighbor[Direction.inverse[i]] = chunk;
		}
	}
	update() {

	}
}