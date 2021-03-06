// define tournaments view
(function () {
	"use strict";
	define([
  		'collections/scheduleCollection',
		'text!templates/schedule.html',
  		'views/gameScheduleView',
	], function (Schedule, ScheduleTemplate,GameScheduleScheduleView) {
		var ScheduleView = Backbone.View.extend({
	   el: $(".content"),
	
        initialize: function () {
    		this.list = this.$el.find("#table");
            this.collection = new Schedule();

    		// Attach custom event handler
    		this.on("change:filterType", this.filterByType, this);
    		
        },
    	
    	// Render the view
        render: function (team) {
            var self = this ;
        	this.collection.fetch({
                // If the request succeeds, the success callback function is executed 
                success: function(data) {
                    // Loop through the fetched models 
                    $(".preloader").remove();
    				$(".content").addClass("animated fadeInDown");
              		$(".backbtn").hide();
                    _.each(self.collection.models, function(model){

                        // Set the url for each model
                        model.url = model.get('resource_uri');

                        // Change date to readable format
    			    	model.attributes.start_time = new Date(model.attributes.start_time);
    			        model.attributes.start_time = $.format.date(model.attributes.start_time, "ddd d MMMM om HH:mm");

                        // Filter by team
                        if(team){ // team id given in url / router
                        	if(model.attributes.team_1.id == team || model.attributes.team_2.id == team){ // If team is in model
                        		self.renderSchedule(model);
                        	}
                        }
                        else{ // If no team id is given in url / router
                        	self.renderSchedule(model);
                    	}
                    });
                },

                error: function(data){
                    // error message
                    self.$el.html('<span class="error"><strong>Oops..</strong> er is iets foutgegaan</span>');

                }
            });

            // add template to html
    		this.$el.html(ScheduleTemplate);
        },

        renderTeam: function(team){ // Render when team in url
    		this.render(team);
    	},

        renderSchedule: function (item) {
            var gameView = new GameScheduleScheduleView({
                model: item
            });

            // Append models in table
            this.$el.find("#table").append(gameView.render().el);
        }

    	});
	
        return new ScheduleView();
	});
}());