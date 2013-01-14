// # Define tournament model #
App.Models.Team = Backbone.Model.extend({
	// Set model defaults *(backbone method)*
	defaults: {
		"team": "Unknown",
		"Pm": 0,
		"Points":0,
		"Win": 0,
		"Lost":0,
		"Sw": 0,
		"Sl": 0,
		"Pw": 0,
		"Pl": 0
	},
	
	initialize: function () {
		
		var won = parseInt(this.get("Win"));
		var lost = parseInt(this.get("Lost"));
		
		// set count for played matches
		var Pm = won + lost;
		this.set("Pm", Pm);
		
		// set point for matches
		var Points = won*3;
		this.set("Points", Points);
		
	}
});