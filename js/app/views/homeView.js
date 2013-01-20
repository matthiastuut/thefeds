/* filename: js/views/home/home.js */

(function () {
	"use strict";
	define([
		'text!templates/home.html'
	], function (HomeTemplate) {
		// console.log(this);
		var HomeView = Backbone.View.extend({
			el: $(".content"),
			render: function () {
				this.$el.html(HomeTemplate);
			}
		});
		return new HomeView();
	});
}());