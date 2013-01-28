/*// define tournament model
(function () {
	"use strict";
	define([
		'app/config'
	], function (config) {
	var GameSchedule = Backbone.Model.extend({
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
  return GameSchedule;
});
}());*/

// Filename: models/project
define([
	'app/config'
], function(config){
  var GameSchedule = Backbone.Model.extend({
	    defaults: {
	    	// Set defaults for unkown values
			'date' : 'unknown',
			'team_1' : 'unknown',
			'team_1_Score' : '-',
			'team_2_Score' : '-',
			'team_2' : 'unknown'
	    }
  });
  // Return the model for the module
  return GameSchedule;
});