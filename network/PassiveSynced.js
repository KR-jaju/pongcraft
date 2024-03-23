
class PassiveSycned {
	constructor(id, time_offset) {
		this.id = id;
		this.time_offset = time_offset;
		this.past = [];
	}
	get(timestamp) {
		if (this.past.length == 0)
			throw new Error("Invalid passive number");
		timestamp -= this.time_offset;
		let past = this.past.shift();
		while (this.past.length > 0) {
			let future = this.past.shift();
			if (future.timestamp < timestamp) {
				past = future;
				continue ;
			}
			this.past.unshift(future);
			this.past.unshift(past);
			return Math.lerp(past.value, future.value, (timestamp - past.timestamp) / (future.timestamp - past.timestamp));
		}
		this.past.unshift(past);
		return past.value;
	}
	synchronize(value, timestamp) {
		this.past.push({timestamp: timestamp, value: value});
	}
}