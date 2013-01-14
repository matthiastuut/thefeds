// Define game view
App.Views.Team = Backbone.View.extend({
    // Define element (this.el)  
	tagName: "tr",
	
	// Set reference to template
    template: $("#team_ranking").html(),
    
    events: {
    	'click .btn-danger' : 'deleteRow'  
    },
    
    deleteRow: function(e){
    	e.preventDefault();
    	this.model.destroy();
    	this.remove();
//    	console.log(e.currentTarget.dataset.team);
    	var teamname = this.model.get("team");
    	
    },
	
	// Initialize view
	initialize: function () {
	},
	
	// Render view
    render: function () {
		// Store template in variable
        var tmpl = _.template(this.template);
		
		// Inject the rendered tempate into the views element 
        $(this.el).html(tmpl(this.model.toJSON()));

		return this;
    }
});