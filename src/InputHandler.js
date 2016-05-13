"use strict";

/**
 * TODO: write detach method
 */
class InputHandler {

	constructor(el) {
		this._el = el;

		this._mouseClicked = false;
		this._mouseX = 0;
		this._mouseY = 0;

		el.addEventListener('mousemove', (e) => {
			this._mouseX = e.layerX;
			this._mouseY = e.layerY;
		});

		el.addEventListener('mousedown', () => {
			this._mouseClicked = true;
		});
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

}