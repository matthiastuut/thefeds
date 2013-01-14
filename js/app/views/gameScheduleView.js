// define individual tournament view
FD.GameScheduleScheduleView = Backbone.View.extend({
    tagName: "li",
    template: $("#scheduleTemplate").html(),
	
	// Attach event handler to view elements
	events: {
	    "click a.delete": "deleteGameSchedule"
	},
	
	// Delete tournament model
	deleteGameSchedule: function (e) {

		// remove every default events after click
		e.preventDefault();

		// Var for check if type exist
		var removedDate = this.model.get("date").toLowerCase();
	    
	    // Smooth hide elements before destroy
	    $(this.el).slideToggle();
		this.model.destroy();
		
		
	    // if type don't exist delete from filter;
		if (_.indexOf(FD.schedule.getTypes(), removedDate) === -1) {
	        FD.schedule.$el.find("#filter select").children("[value='" + removedDate + "']").remove();
	    }
	},
	
	// Render view
    render: function () {
        var tmpl = _.template(this.template);;
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});