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
        // this.collection = new Schedule(scheduleData);


		// this.render();	
		
		// Fill filter
		
        // this.$el.find("#filter").append(this.createSelect());

		// Attach custom event handler
		this.on("change:filterType", this.filterByType, this);
		
		// Attach eventhandlers to collection
        this.collection.on("reset", this.render, this);
		this.collection.on("add", this.renderSchedule, this);
		this.collection.on("remove", this.removeGameSchedule, this);
    },

	// Attach event handlers to view elements
	events: {
	    // "change #filter select": "setFilter",
		// "click #add": "addGameSchedule",
		// "click #showForm": "showForm",
		"click #table>li:first-of-type>span": "order"
	},
	
	// Render the view
    render: function () {


        var self = this ;
    	this.collection.fetch({
            // If the request succeeds, the success callback function is executed 
            success: function(data) {
                // Loop through the fetched models 
                _.each(self.collection.models, function(model){

                    // Set the url for each model
                    model.url = model.get('resource_uri');

                    self.renderSchedule(model);
                    console.log(self);
                });

            },

            error: function(data){
                alert("Sorry! Data ophalen mislukt.");
            }

        });


		this.$el.html(ScheduleTemplate);
    	this.$el.find("ul#table").html('<li><span>Date</span><span id="team1">Home v</span><span>Result</span><span id="team2">Out v</span></li>');
		// _.each(this.collection.models, function (item) {
  //       	this.renderSchedule(item);
  //       }, this);
        // this.$el.find("#filter").append(this.createSelect());


    },

    renderSchedule: function (item) {
        var gameView = new GameScheduleScheduleView({
            model: item
        });

        this.$el.find("#table").append(gameView.render().el);
    },
	
	// Add tournament model
		// addGameSchedule: function (e) {
		//     this.collection.reset(scheduleData);
		//     e.preventDefault();
		//     var newModel = {};
		//     $("#addGameSchedule").children("input").each(function (i, el) {
		//         if ($(el).val() !== "") {
		//             newModel[el.id] = $(el).val();
		//       }
		//     });
		//     scheduleData.push(newModel);
		    

		//     if (_.indexOf(this.getTypes(), newModel.date) === -1) {
		//          this.collection.add(new GameSchedule(newModel));
		//          this.$el.find("#filter select").remove().end();
		//          this.$el.find("#filter").append(this.createSelect());
		//     } else {
		//         this.collection.add(new GameSchedule(newModel));
		//     }
		    
		// },
		
		// // Remove tournament model
		// removeGameSchedule: function (removedModel) {
		//     var removed = removedModel.attributes;
		//     _.each(scheduleData, function (item) {
		//         if (_.isEqual(item, removed)) {
		//             scheduleData.splice(_.indexOf(scheduleData, item), 1);
		//         }
		//     });
		// },

	// Get types for schedulingFormat select box
	getTypes: function () {
	    return _.uniq(this.collection.pluck("date"), false, function (type) {
	        return type.toLowerCase();
	    });
	},
	
	// Create schedulingFormat select box
	// createSelect: function () {
	//     var filter = this.$el.find("#filter"),
	//         select = $("<select/>", {
	//            html: "<option value='all'>all</option>"
	//        });
	//     _.each(this.getTypes(), function (item) {
	//         var option = $("<option/>", {
	//             value: item.toLowerCase(),
	//             text: item.toLowerCase()
	//         }).appendTo(select);
	//     });
	// 	return select;
	// },

	// Create schedulingFormat select box
	order: function (e) {
		var orderBy = e.currentTarget.id;
		this.collection.comparator = function(schedule) {
			return schedule.get(e.currentTarget.id);
		};
	    this.collection.sort();

	},
	
	// Set filter
	// setFilter: function (e) {
	//     this.filterType = e.currentTarget.value;
	    
	// 	// Trigger custom event handler
	// 	this.trigger("change:filterType");
	// },
	
	// Filter the collection
	// filterByType: function () {
	//     if (this.filterType === "all") {
	//         this.collection.reset(scheduleData);
	//     } else {
	//        this.collection.reset(scheduleData, { silent: true });
	//         var filterType = this.filterType,
	//             filtered = _.filter(this.collection.models, function (item) {
	//             return item.get("date").toLowerCase() === filterType;
	//         });
	//         console.log(filtered);
	//         this.collection.reset(filtered);
	//     }
	// },
	
	showForm: function (e) {
		e.preventDefault();
	    // this.$el.find("#addGameSchedule").slideToggle();
	}

	});
		return new ScheduleView();
	});
}());


//create instance of master view
// schedule = new ScheduleView();