"use strict";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let player;
let laser;
let lastFrameTime;

let mouseX = 0;
let mouseY = 0;

let mouseClicked = false;

function loadImage(url, cb) {
    let img = new Image();
    img.src = url;
    img.onload = () => {
        cb(null, img);
    };

    img.onerror = (e) => {
        cb(e);
    }
}

function init() {
    loadImage('res/player-blue.png', (err, playerImg) => {
		loadImage('res/laserRed06.png', (err, laserImg) => {
			player = new Player(playerImg);
			console.log(`${player.getName()} is ready for battle!!!`);
			player.setPivot(0.5, 0.5);
			
			laser = new Sprite(laserImg);
			laser.setPos(50, 50);
			laser.setPivot(0.5, 0);

			lastFrameTime = Date.now();
			animate();
		})
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
    player.setPos(mouseX, mouseY);
	laser.move(0, laserSpeed*dt);

	if (mouseClicked) {
		mouseClicked = false;
		let pos = player.getPos();
		laser.setPos(pos.x + player.getSize().width/2,
			pos.y);
	}
}

function draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	laser.draw(ctx);
	player.draw(ctx);
}

init();