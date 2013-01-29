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
    	// console.log(Schedule);
		this.list = this.$el.find("#table");
		// console.log(scheduleData);
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


			    	model.attributes.start_time = new Date(model.attributes.start_time);
			        model.attributes.start_time = $.format.date(model.attributes.start_time, "ddd d MMMM om HH:mm");

                    if(team){
                    	if(model.attributes.team_1.id == team || model.attributes.team_2.id == team){
                    		self.renderSchedule(model);
                    	}
                    }
                    else{
                    	self.renderSchedule(model);
                	}
                });
            },

            error: function(data){

            }
        });
		this.$el.html(ScheduleTemplate);
    },

    renderTeam: function(team){
		this.render(team);
	},

    renderSchedule: function (item) {
        var gameView = new GameScheduleScheduleView({
            model: item
        });
        this.$el.find("#table").append(gameView.render().el);
    }

	});
		return new ScheduleView();
	});
}());