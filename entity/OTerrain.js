
class OTerrain extends Entity {
	constructor() {
		this.terrain = new Terrain(this);
	
		this.terrain.setChunk(0, 0, 0, new Chunk());
		this.terrain.setChunk(-1, 0, 0, new Chunk());
		// this.terrain.setChunk(0, 0, 0, new Chunk());
		this.terrain.getChunk(0, 0, 0).setBlock(0, 0, 0, 1);
		// console.log(this.terrain.getChunk(-1, 0, 0).getBlock(32, 0, 0));
		console.log(this.terrain.getChunk(0, 0, 0).getBlock(0, 0, 0));
	}
	update() {
		this.terrain.update();
	}
	render(gl) {
		
	}
}