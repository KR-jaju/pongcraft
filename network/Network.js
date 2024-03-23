
const	SEND_DELAY = 100;
const	RECV_DEALY = 100;

class Network {
	constructor(server) {
		this.server = server;
		this.allocated = {};
		this.fetched = {};
	}
	allocate(id, data) {
		if (id in this.allocated || id in this.fetched)
			throw new Error("duplicate id");
		const request = new Promise((resolve) => {
			setTimeout(() => {
				this.server.allocate(id);
				setTimeout(resolve, RECV_DEALY);
			}, SEND_DELAY);
		});
		this.allocated[id] = new ActiveSynced(this, data);
		return (request);
	}
	fetch(id) {
		if (id in this.fetched)
			return this.fetched[id];
		const request = new Promise((resolve) => {
			setTimeout(() => {
				this.server.fetch(id);
				setTimeout(resolve, RECV_DEALY);
			}, SEND_DELAY);
		});
		const	variable = new PassiveSynced(this, id);
		this.fetched[id] = variable;
	}
}