
class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.gl = canvas.getContext("webgl2");
		this.scene = new Scene();
		let terrain = new OTerrain();
		this.scene.add(terrain);
	}
	update() {
		this.scene.update();
	}
}
