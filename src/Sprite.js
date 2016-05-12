"use strict";

class Sprite extends GameObject {

    constructor(img) {
        super(100, 100);
        this._img = img;
    }

    draw(ctx) {
        ctx.drawImage(this._img, this._x, this._y);
    }
}