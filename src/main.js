"use strict";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let playerImg;

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
        drawScene();
    });
}

function drawScene() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImg, 100, 100);
}

init();