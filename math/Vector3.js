
class Vector3 {
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	static add(a, b) {
		return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
	}
	static sub(a, b) {
		return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
	}
	static mul(a, b) {
		return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
	}
	static div(a, b) {
		return new Vector3(a.x / b.x, a.y / b.y, a.z / b.z);
	}
}