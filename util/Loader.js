
class Loader {
	static loadImage(src) {
		const request = new Promise((resolve) => {
			const	image = new Image();
			image.src = src;
			image.addEventListener("load", function() {
				resolve(image);
			});
		});
		return (request);
	}
}