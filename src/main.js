"use strict";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let player;
let lasers = [];
let enemies = [];

let lastFrameTime;

let laserImg;

let mouseX = 0;
let mouseY = 0;

let mouseClicked = false;

let rm = new ResourceManager();

let lastSpawnTime = 0;
const ENEMY_DELAY = 2000;

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

		player = new Player(rm.getResource('player'));
		console.log(`${player.getName()} is ready for battle!!!`);
		player.setPivot(0.5, 0.5);

		lastFrameTime = Date.now();
		animate();
	});

	canvas.addEventListener('mousemove', (e) => {
		mouseX = e.layerX;
		mouseY = e.layerY;
	});

	canvas.addEventListener('mousedown', () => {
		mouseClicked = true;
	});
}

function animate() {
    let dt = Date.now() - lastFrameTime;
    lastFrameTime = Date.now();

    requestAnimationFrame(animate);
    update(dt);
    draw(ctx);
}

/**
 * @param dt delta time
 */
function update(dt) {
    let laserSpeed = -0.5;
	let enemySpeed = 0.3;


    player.setPos(mouseX, mouseY);
	// laser.move(0, laserSpeed*dt);

	if (mouseClicked) {
		mouseClicked = false;

		let laser = new Sprite(rm.getResource('laser'));
		laser.setPos(50, 50);
		laser.setPivot(0.5, 0);
		lasers.push(laser);

		let pos = player.getPos();
		laser.setPos(pos.x + player.getSize().width/2,
			pos.y);
	}

	lasers.forEach((laser) => {
		laser.move(0, laserSpeed*dt);
	});

	enemies.forEach((enemy) => {
		enemy.move(0, enemySpeed*dt);
	});

	if (Date.now() - lastSpawnTime > ENEMY_DELAY) {
		lastSpawnTime = Date.now();
		spawnEnemy();
	}

}

function draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

	lasers.forEach((laser) => {
		laser.draw(ctx);
	});

	enemies.forEach((enemy) => {
		enemy.draw(ctx);
	});

	player.draw(ctx);
}

function spawnEnemy() {
	let enemy = new Sprite(rm.getResource('enemy'));
	enemy.setPos(Math.floor(
		Math.random()*(canvas.width - enemy.getSize().width)), -50);
	enemies.push(enemy);
}

init();