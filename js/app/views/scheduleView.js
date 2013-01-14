// define tournaments view
FD.ScheduleView = Backbone.View.extend({
    el: $("#schedule"),
	
    initialize: function () {
		this.list = this.$el.find("#table");
        this.collection = new FD.Schedule(FD.scheduleData);

		this.render();	
		
		// Fill filter
		this.$el.find("#filter").append(this.createSelect());
		
		// Attach custom event handler
		this.on("change:filterType", this.filterByType, this);
		
		// Attach eventhandlers to collection
        this.collection.on("reset", this.render, this);
		this.collection.on("add", this.renderSchedule, this);
		this.collection.on("remove", this.removeGameSchedule, this);


			
    },

	// Attach event handlers to view elements
	events: {
	    "change #filter select": "setFilter",
		"click #add": "addGameSchedule",
		"click #showForm": "showForm",
		"click #table>li:first-of-type>span": "order"
	},
	
	// Render the view
    render: function () {
    	this.$el.find("ul#table").html('<li><span>Date</span><span id="team1">Home v</span><span>Result</span><span id="team2">Out v</span></li>');
		_.each(this.collection.models, function (item) {
        	this.renderSchedule(item);
        }, this);

    },

    renderSchedule: function (item) {
        var gameView = new FD.GameScheduleScheduleView({
            model: item
        });

        this.list.append(gameView.render().el);
    },
	
	// Add tournament model
	addGameSchedule: function (e) {
	    this.collection.reset(FD.scheduleData);
	    e.preventDefault();
	    var newModel = {};
	    $("#addGameSchedule").children("input").each(function (i, el) {
	        if ($(el).val() !== "") {
	            newModel[el.id] = $(el).val();
	      }
	    });
	    FD.scheduleData.push(newModel);
	    

	    if (_.indexOf(this.getTypes(), newModel.date) === -1) {
	         this.collection.add(new FD.GameSchedule(newModel));
	         this.$el.find("#filter select").remove().end();
	         this.$el.find("#filter").append(this.createSelect());
	    } else {
	        this.collection.add(new FD.GameSchedule(newModel));
	    }
	    
	},
	
	// Remove tournament model
	removeGameSchedule: function (removedModel) {
	    var removed = removedModel.attributes;
	    _.each(FD.scheduleData, function (item) {
	        if (_.isEqual(item, removed)) {
	            FD.scheduleData.splice(_.indexOf(FD.scheduleData, item), 1);
	        }
	    });
	},

	// Get types for schedulingFormat select box
	getTypes: function () {
	    return _.uniq(this.collection.pluck("date"), false, function (type) {
	        return type.toLowerCase();
	    });
	},
	
	// Create schedulingFormat select box
	createSelect: function () {
	    var filter = this.$el.find("#filter"),
	        select = $("<select/>", {
	           html: "<option value='all'>all</option>"
	       });
	    _.each(this.getTypes(), function (item) {
	        var option = $("<option/>", {
	            value: item.toLowerCase(),
	            text: item.toLowerCase()
	        }).appendTo(select);
	    });
	    return select;
	},

	// Create schedulingFormat select box
	order: function (e) {
		var orderBy = e.currentTarget.id;
		this.collection.comparator = function(schedule) {
			return schedule.get(e.currentTarget.id);
		};
	    this.collection.sort();

	},
	
	// Set filter
	setFilter: function (e) {
	    this.filterType = e.currentTarget.value;
	    
		// Trigger custom event handler
		this.trigger("change:filterType");
	},
	
	// Filter the collection
	filterByType: function () {
	    if (this.filterType === "all") {
	        this.collection.reset(FD.scheduleData);
	    } else {
	       this.collection.reset(FD.scheduleData, { silent: true });
	        var filterType = this.filterType,
	            filtered = _.filter(this.collection.models, function (item) {
	            return item.get("date").toLowerCase() === filterType;
	        });
	        console.log(filtered);
	        this.collection.reset(filtered);
	    }
	},
	
	showForm: function (e) {
		e.preventDefault();
	    this.$el.find("#addGameSchedule").slideToggle();
	}
});


//create instance of master view
FD.schedule = new FD.ScheduleView();