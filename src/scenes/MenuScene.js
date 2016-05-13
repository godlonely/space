'use strict';

class MenuScene extends Scene {

	constructor(gameContext) {
		super();
		this._gameContext = gameContext;
		this._input = gameContext.input;
		this._done = false;
	}

	update(dt) {
		if (this._done) {
			return;
		}

		if (this._input.mouseWasClicked()) {
			this._done = true;
			this.emit('done');
		}
	}

	draw(ctx) {
		ctx.font = "48px sans-serif";
		ctx.fillStyle = 'white';
		ctx.fillText('Space Shooter', 80, 150);
	}
}