'use strict';

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

	removeAllListeners(type) {
		if (type) {
			this._listeners[type] = [];
		} else {
			this._listeners = {};
		}
	}

	removeListener(type, listener) {
		if (typeof listener !== 'function') {
			throw Error('Listener must be a function');
		}

		if (!this._listeners[type]) {
			return;
		}

		let position = this._listeners[type].indexOf(listener);

		if (position !== -1) {
			this._listeners[type].splice(position, 1);
		}
	}

	hasListenersFor(type) {
		return !!(this._listeners[type] && this._listeners[type].length);
	}
}

EventEmitter.prototype.addEventListener = EventEmitter.prototype.on;