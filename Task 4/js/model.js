(function (window) {
	'use strict';


	/**
	 * Creates a new Model instance and hooks up the storage.
	 *
	 * @constructor
	 */
	function Model() {
		this.storage = [];
	}

	/**
	 * Creates a new todo model
	 *
	 * @param {string} [title] The title of the task
	 * @param {function} [callback] The callback to fire after the model is created
	 */
	Model.prototype.create = function (title, callback) {
		title = title || '';
		callback = callback || function () {};

		var newItem = {
			title: title.trim(),
			completed: false
		};

		this.storage.push(newItem);
		callback.call(this, [newItem])
	};

	/**
	 * Finds and returns a model in storage.
	 */
	Model.prototype.read = function () {
		return this.storage;
	};

	// Export to window
	window.app = window.app || {};
	window.app.Model = Model;
})(window);
