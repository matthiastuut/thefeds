// define tournament model
FD.GameSchedule = Backbone.Model.extend({
    defaults: {
    	// Set defaults for unkown values
		'date' : 'unknown',
		'team1' : 'unknown',
		'team1Score' : '-',
		'team2Score' : '-',
		'team2' : 'unknown'
    },

    initialize: function () {
    	console.log("Team model initialized");
	}
});