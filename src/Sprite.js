"use strict";

class Sprite extends GameObject {

    constructor(img) {
        super(100, 100);
        this._img = img;
        this.setSize(img.width, img.height);
    }

    draw(ctx) {
        ctx.strokeStyle = 'darkgreen';
		ctx.strokeRect(this._x, this._y, this._width, this._height);
        ctx.drawImage(this._img, this._x, this._y);
    }
}