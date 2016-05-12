"use strict";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let player;
let lastFrameTime;

let mouseX = 0;
let mouseY = 0;

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
    loadImage('res/player-blue.png', (err, img) => {
        player = new Player(img);
		player.setSize(img.width, img.height);
		player.setPivot(0.5, 0.5);
        lastFrameTime = Date.now();
        animate();
    });

	canvas.addEventListener('mousemove', (e) => {
		mouseX = e.layerX;
		mouseY = e.layerY;
	});
}

function animate() {
    let dt = Date.now() - lastFrameTime;
    lastFrameTime = Date.now();

    requestAnimationFrame(animate);
    update(dt);
    draw(ctx);
}

function update(dt) {
    // let speed = 0.1;
    player.setPos(mouseX, mouseY);
}

function draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
}

init();