'use strict';

class ResourceManager {

	constructor() {
		this._store = {};
	}

	/**
	 * {
	 * 	'player': 'res/player-blue.png'
	 * }
	 * @param resources
	 * @param cb callback
	 */
	load(resources, cb) {
		let numResources = 0;
		let loadedResources = 0;

		Object.getOwnPropertyNames(resources).forEach((key) => {
			numResources++;

			let url = resources[key];

			let img = new Image();
			img.src = url;
			img.onload = () => {
				this._store[key] = img;
				loadedResources++;
				if (loadedResources === numResources) {
					cb();
				}
			};

			img.onerror = (e) => {
				cb(e);
			}
		})
	}

	getResource(name) {
		return this._store[name];
	}

}