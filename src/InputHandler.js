"use strict";

class InputHandler {

	constructor(el) {
		this._el = el;

		this._mouseClicked = false;
		this._mouseX = 0;
		this._mouseY = 0;

		this._onMouseMove = (e) => {
			this._mouseX = e.layerX;
			this._mouseY = e.layerY;
		};

		this._onMouseDown = (e) => {
			this._mouseClicked = true;
		};

		el.addEventListener('mousemove', this._onMouseMove);
		el.addEventListener('mousedown', this._onMouseDown);
	}

	mouseWasClicked() {
		return this._mouseClicked;
	}

	mousePos() {
		return {
			x: this._mouseX,
			y: this._mouseY
		}
	}

	clearMouseClicked() {
		this._mouseClicked = false;
	}

	detach() {
		this._el.removeEventListener('mousemove', this._onMouseMove);
		this._el.removeEventListener('mousedown', this._onMouseDown);
	}
}