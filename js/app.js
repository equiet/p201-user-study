/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 */
	function Todo() {
		this.model = new app.Model();
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}

	var todo = new Todo();

	$on(window, 'load', function() { todo.controller.showAll(); });
})();
