
(function () {
	"use strict";
	define([
		'app/collections/rankingCollection',
		'text!templates/ranking.html',
		'/js/app/views/teamstand.js',
	], function (collection, template, teamstand) {

		var rankingView = Backbone.View.extend({
			
			el: $(".content"),
			
			initialize: function(){
			
				var self = this;
								
				this.collection = new rankingCollection();
				
				// Fetch data from the API, this is a "GET" request
				this.collection.fetch({
				    // If the request succeeds, the success callback function is executed 
				    success: function(data) {
				        // Loop through the fetched models 
				        _.each(self.collection.models, function(model){
				            self.renderPool(model);
				        });
				        
				        
				    }
				});
				
				
			},
			
			renderPool: function(model){
			
			

			},			
			
			getTeaminfo: function(url){
				
				console.log(url);
				
			},
			
			
			render: function () {
				this.$el.html(template);			
				
			}
		});
		return new rankingView();
	});
}());