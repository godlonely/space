'use strict';

class GameScene extends Scene {

	constructor(gameContext) {
		super();

		this._gameContext = gameContext;
		this._input = gameContext.input;
		this._rm = gameContext.rm;

		this._lasers = [];
		this._enemies = [];

		this._lastSpawnTime = Date.now();
		this._nextEnemyDelay = 0;

		this._player = new Player(rm.getResource('player'));
		console.log(`${this._player.getName()} is ready for battle!!!`);
		this._player.setPivot(0.5, 0.5);
	}

	/**
	 * @param dt delta time
	 */
	update(dt) {
		let laserSpeed = -0.5;
		let enemySpeed = 0.3;

		let mouseX = this._input.mousePos().x;
		let mouseY = this._input.mousePos().y;
		let mouseClicked = this._input.mouseWasClicked();

		this._player.setPos(mouseX, mouseY);
		// laser.move(0, laserSpeed*dt);

		if (mouseClicked) {
			let laser = new Sprite(this._rm.getResource('laser'));
			laser.setPos(50, 50);
			laser.setPivot(0.5, 0);
			this._lasers.push(laser);

			let pos = this._player.getPos();
			laser.setPos(pos.x + this._player.getSize().width/2,
				pos.y);
		}

		this._lasers.forEach((laser) => {
			laser.move(0, laserSpeed*dt);
		});

		this._enemies.forEach((enemy) => {
			enemy.move(0, enemySpeed*dt);
		});

		if (Date.now() - this._lastSpawnTime > this._nextEnemyDelay) {
			this._lastSpawnTime = Date.now();
			this._nextEnemyDelay = 1000 + Math.random()*1000;
			this._spawnEnemy();
		}

	}

	draw(ctx) {
		this._lasers.forEach((laser) => {
			laser.draw(ctx);
		});

		this._enemies.forEach((enemy) => {
			enemy.draw(ctx);
		});

		this._player.draw(ctx);
	}

	_spawnEnemy() {
		let enemy = new Sprite(this._rm.getResource('enemy'));
		enemy.setPos(Math.floor(
			Math.random()*(this._gameContext.width - enemy.getSize().width)), -50);
		this._enemies.push(enemy);
	}
}