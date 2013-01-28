
(function () {
	"use strict";
	define([
		'app/collections/rankingCollection',
		'text!templates/home.html',
	], function (collection, template) {
		// console.log(this);
		var HomeView = Backbone.View.extend({
			
			el: $(".content"),
			initialize: function(){
			
				var self = this;
				
				this.collection = new rankingCollection();
				
				console.log(this.collection);
				
				// Fetch data from the API, this is a "GET" request
				this.collection.fetch({
				    // If the request succeeds, the success callback function is executed 
				    success: function(data) {
				        // Loop through the fetched models 
				        _.each(self.collection.models, function(model){
				            // Set the url for each model
				            console.log(model);
				        });
				    }
				});
				
				
			},
			
			
			render: function () {
				this.$el.html(template);
			}
		});
		return new HomeView();
	});
}());