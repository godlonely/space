"use strict";

class GameObject {

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    update() {

    }

    draw(ctx) {

    }

    getPos() {
        return {
            x: this._x,
            y: this._y
        }
    }

    setPos(x, y) {
        this._x = x;
        this._y = y;
    }

    move(dx, dy) {
        this._x += dx;
        this._y += dy;
    }
}