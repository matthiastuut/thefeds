
(function () {
	"use strict";
	define([
		'text!templates/teamstand.html',
	], function (template) {
		// console.log(this);
		var teamstand = Backbone.View.extend({
			
			el: "table",
			
			initialize: function(){
				console.log("teamstand init");
			},

			render: function () {
				this.$el.append(template);			
			}
		});
		return teamstand;
	});
	
	
}());