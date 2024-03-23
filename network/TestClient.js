
function update(nickname, active, passive) {
	active.add(performance.now(), 0.5);
	console.log(nickname + " : " + active.get());
	console.log(nickname + " : " + passive.get(performance.now()));
}

onmessage = (e) => {
	const	nickname = e.data[0];
	const	server = e.data[1];
	const	network = new Network(server);
	const	active = network.createActive(nickname + "_active");
	const	passive = network.createActive(nickname + "_passive");

	setInterval(update, 200, nickname, active, passive);
}
