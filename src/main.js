"use strict";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let playerImg;

let playerX = 100;
let playerY = 100;

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
        playerImg = img;
        animate();
    });
}

function animate() {
    requestAnimationFrame(animate);
    update();
    draw();
}

function update() {
    playerX += 2;
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImg, playerX, playerY);
}

init();