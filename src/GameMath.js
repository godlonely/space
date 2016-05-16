
class GameMath {

	static rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
			return (x1 <= x2 + w2 && x1 + w1 >= x2 &&
			y1 <= y2 + h2 && y1 + h1 >= y2);
	}

	static spritesIntersect(s1, s2) {
		let x1 = s1.getPos().x;
		let y1 = s1.getPos().y;
		let w1 = s1.getSize().width;
		let h1 = s1.getSize().height;

		let x2 = s2.getPos().x;
		let y2 = s2.getPos().y;
		let w2 = s2.getSize().width;
		let h2 = s2.getSize().height;

		return GameMath.rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2);
	}
}