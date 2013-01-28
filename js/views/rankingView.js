
(function () {
	"use strict";
	define([
		'collections/rankingCollection',
		'text!templates/ranking.html',
		'js/views/teamstand.js',
	], function (collection, template, teamstand) {

		var rankingView = Backbone.View.extend({
			
			el: $(".content"),
			
			initialize: function(){
			
				var self = this;			
				this.collection = new rankingCollection();
				
				this.render();
			},
			
			render: function () {
				self = this;
			
				_.each(this.collection.models, function(item){
					console.log("item = ",item);
				    self.renderPool(item);
				}, this);		
			},
			
			renderPool: function(item){
				
				console.log(item);
				var teamView = new teamstand({
					model: item
				});
				
				this.$el.find('.pool').append(teamView.render().el);

			},			
			
			getTeaminfo: function(url){
				
				console.log(url);
				
			}
			
		});
		return new rankingView();
	});
}());