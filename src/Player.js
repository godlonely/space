'use strict';

class Player extends Sprite {

	constructor(img, name = 'The Black Perl') {
		super(img);
		this._name = name;
	}

	getName() {
		return this._name;
	}

	setName(name) {
		this._name = name;
	}
}