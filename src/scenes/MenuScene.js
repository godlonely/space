'use strict';

class MenuScene extends Scene {

	constructor(gameContext) {
		super();
		this._gameContext = gameContext;
		this._input = gameContext.input;
	}

	update(dt) {
		if (this._input.mouseWasClicked()) {
			// Change the scene ?
			console.log('I need to pass control to the next scene!!!!');
		}
	}

	draw(ctx) {
		ctx.font = "48px sans-serif";
		ctx.fillStyle = 'white';
		ctx.fillText('Space Shooter', 80, 150);
	}
}