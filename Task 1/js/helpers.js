/*global NodeList */
(function (window) {
	'use strict';

	// addEventListener wrapper:
	window.$on = function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	};
})(window);
