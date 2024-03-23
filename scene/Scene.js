
class Scene {
	constructor() {
		this.entity_list = [];
	}
	add(entity) {
		this.entity_list.push(entity);
	}
	update() {
		for (let entity of this.entity_list) {
			entity.update();
		}
	}
}