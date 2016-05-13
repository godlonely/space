'use strict';

/**
 * Make de-registration functions
 */
class EventEmitter {

	constructor() {
		this._listeners = {};
	}

	on(type, listener) {

		if (!this._listeners[type]) {
			this._listeners[type] = [];
		}

		this._listeners[type].push(listener);
	}

	emit(type, event) {
		if (!this.hasListenersFor(type)) {
			return;
		}

		this._listeners[type].forEach((listener) => {
			listener.call(null, event);
		});
	}

	hasListenersFor(type) {
		return !!(this._listeners[type] && this._listeners[type].length);
	}
}