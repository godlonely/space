"use strict";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let player;

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
        animate();
    });
}

function animate() {
    requestAnimationFrame(animate);
    update();
    draw();
}

function update() {
    player.move(2, 0);
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
}

init();