
Math.prototype.lerp = function(a, b, t) {
	return (a + (b - a) * t);
}

class ActiveNumber {
	constructor(server, id, initial_value) {
		this.synced = {
			timestamp: 0,
			value: initial_value
		}
		this.changes = [];
		this.server = server;
		this.id = id;
	}
	add(timestamp, delta) {
		const change = {timestamp: timestamp, delta: delta};
		this.changes.push(change);
		//send server the change
		this.server.applyChange(id, change);
	}
	get() {
		const present = this.synced.value;
		for (let i = 0; i < this.changes.length; i++)
			present += this.changes[i].delta;
		return (present);
	}
	synchronize(value, timestamp) {
		while (this.changes.length > 0) {
			let change = this.changes.shift();
			if (change.timestamp <= timestamp)
				continue ;
			this.synced.value = value;
			this.synced.timestamp = timestamp;
			this.changes.unshift(change);
		}
	}
}