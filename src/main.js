'use strict';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let input = new InputHandler(canvas);

let lastFrameTime;

let rm = new ResourceManager();

let menuScene = new TitleScene(getGameContext(), 'Space Shooter');

class WinScene extends TitleScene {
	constructor(context) {
		super(context, 'You Win!')
	}
}

class LoseScene extends TitleScene {
	constructor(context) {
		super(context, 'You Lose!')
	}
}

let winScene = new WinScene(getGameContext());
winScene.on('done', () => {
	currentScene = menuScene;
});

let loseScene = new LoseScene(getGameContext());
loseScene.on('done', () => {
	currentScene = menuScene;
});

let currentScene = menuScene;

menuScene.on('done', () => {
	let gameScene = new GameScene(getGameContext());

	gameScene.on('win', () => {
		currentScene = winScene;
	});

	gameScene.on('lose', () => {
		currentScene = loseScene;
	});

	currentScene = gameScene;
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