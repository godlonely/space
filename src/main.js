"use strict";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let input = new InputHandler(canvas);

let lastFrameTime;

let rm = new ResourceManager();

let currentScene = new MenuScene(getGameContext());

currentScene.on('done', () => {
	currentScene = new GameScene(getGameContext());
});

function init() {

	rm.load({
		'player': 'res/player-blue.png',
		'laser': 'res/laserRed06.png',
		'enemy': 'res/enemyRed1.png'
	}, (err) => {
		if (err) {
			console.log(err);
			return;
		}

		lastFrameTime = Date.now();
		animate();
	});
}

function animate() {
    let dt = Date.now() - lastFrameTime;
    lastFrameTime = Date.now();

    requestAnimationFrame(animate);

	clearScreen();
	currentScene.update(dt);
	currentScene.draw(ctx);

	input.clearMouseClicked();
}

function clearScreen() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function getGameContext() {
	return {
		input,
		rm,
		width: canvas.width,
		height: canvas.height
	}
}

init();