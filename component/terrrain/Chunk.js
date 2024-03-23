
class Chunk {
	static	SIZE = 32;
	constructor() {
		this.data = new Uint16Array(Chunk.SIZE ** 3);
		this.neighbor = new Array(6);
	}
	setBlock(x, y, z, id) {
		this.data[((z * Chunk.SIZE) + y) * Chunk.SIZE + x] = id;
	}
	getBlock(x, y, z) {
		if (x < 0) {
			if (this.neighbor[Direction.X_NEGATIVE] == null)
				return (0);
			return this.neighbor[Direction.X_NEGATIVE].getBlock(x + Chunk.SIZE, y, z);
		}
		if (y < 0) {
			if (this.neighbor[Direction.Y_NEGATIVE] == null)
				return (0);
			return this.neighbor[Direction.Y_NEGATIVE].getBlock(x, y + Chunk.SIZE, z);
		}
		if (z < 0) {
			if (this.neighbor[Direction.Z_NEGATIVE] == null)
				return (0);
			return this.neighbor[Direction.Z_NEGATIVE].getBlock(x, y, z + Chunk.SIZE);
		}
		if (x >= Chunk.SIZE) {
			if (this.neighbor[Direction.X_POSITIVE] == null)
				return (0);
			return this.neighbor[Direction.X_POSITIVE].getBlock(x - Chunk.SIZE, y, z);
		}
		if (y >= Chunk.SIZE) {
			if (this.neighbor[Direction.Y_POSITIVE] == null)
				return (0);
			return this.neighbor[Direction.Y_POSITIVE].getBlock(x, y - Chunk.SIZE, z);
		}
		if (z >= Chunk.SIZE) {
			if (this.neighbor[Direction.Z_POSITIVE] == null)
				return (0);
			return this.neighbor[Direction.Z_POSITIVE].getBlock(x, y, z - Chunk.SIZE);
		}
		return (this.data[((z * Chunk.SIZE) + y) * Chunk.SIZE + x]);
	}
}