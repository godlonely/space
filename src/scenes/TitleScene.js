'use strict';

class TitleScene extends Scene {

	constructor(gameContext, title) {
		super();
		this._gameContext = gameContext;
		this._input = gameContext.input;
		this._title = title;
	}

	update(dt) {
		if (this._input.mouseWasClicked()) {
			this._done = true;
			this.emit('done');
		}
	}

	draw(ctx) {
		ctx.font = "48px sans-serif";
		ctx.fillStyle = 'white';
		ctx.fillText(this._title, 80, 150);
	}
}