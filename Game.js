
class Game {
	constructor(gc, ac = null) {
		this.gc = gc;
		this.ac = ac;
		this.scene = new Scene();
		let terrain = new OTerrain();
		this.scene.add(terrain);
	}
	update() {
		this.scene.update();
	}
}
