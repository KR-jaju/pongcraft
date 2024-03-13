
class Bitmap {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.data = new Uint8Array(width * height * 4);
	}
	static from(image) {
		const	width = image.width;
		const	height = image.height;
		const	canvas = new OffscreenCanvas(width, height);
		const	context = canvas.getContext("2d");
		context.drawImage(image, 0, 0);
		const	imageData = context.getImageData(0, 0, width, height);
		const	pixels = new Uint8Array(imageData.data.buffer);
		const	bitmap = new Bitmap(width, height);
		bitmap.data.set(pixels);
		return (bitmap);
	}
}