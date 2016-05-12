"use strict";

class GameObject {

    constructor(x, y) {
        this._x = x;
        this._y = y;
		this._width = 0;
		this._height = 0;

        this._pivotX = 0;
		this._pivotY = 0;

		this._absPivotX = 0;
		this._absPivotY = 0;
    }

    update() {

    }

    draw(ctx) {

    }

	setSize(width, height) {
		this._width = width;
		this._height = height;
	}

	getSize() {
		return {
			width: this._width,
			height: this._height
		}
	}

    setPos(x, y) {
        this._x = x - this._absPivotX;
        this._y = y - this._absPivotY;
    }

	getPos() {
		return {
			x: this._x,
			y: this._y
		}
	}

	getPivot() {
		return {
			x: this._pivotX,
			y: this._pivotY
		}
	}

	setPivot(x, y) {
		
		if (x < 0 || x > 1 || y < 0 || y > 1) {
			throw Error('Pivot coords should be between 0 and 1');
		}
		
		this._pivotX = x;
		this._pivotY = y;

		this._absPivotX = this._width * this._pivotX;
		this._absPivotY = this._height * this._pivotY;
	}

    move(dx, dy) {
        this._x += dx;
        this._y += dy;
    }
}