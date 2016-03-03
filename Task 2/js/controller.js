(function (window) {
	'use strict';

	/**
	 * Takes a model and view and acts as the controller between them
	 *
	 * @constructor
	 * @param {object} model The model instance
	 * @param {object} view The view instance
	 */
	function Controller(model, view) {
		var self = this;
		self.model = model;
		self.view = view;

		self.view.bind('newTodo', function (title) {
			self.addItem(title);
		});

	}

	/**
	 * An event to fire on load. Will get all items and display them in the
	 * todo-list
	 */
	Controller.prototype.showAll = function () {
		var data = this.model.read();
		this.view.render('showEntries', data);
	};

	/**
	 * An event to fire whenever you want to add an item. Simply pass in the event
	 * object and it'll handle the DOM insertion and saving of the new item.
	 */
	Controller.prototype.addItem = function (title) {
		var self = this;

		if (title.trim() === '') {
			return;
		}

		self.model.create(title, function () {
			try {
				self.view.render('clearNewTodo');
				self.showAlll();
			} catch (e) {}
		});
	};

	// Export to window
	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);
