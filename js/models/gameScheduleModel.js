// Filename: models/project
define([
	'config'
], function(config){
  var GameSchedule = Backbone.Model.extend({
	    defaults: {
	    	// Set defaults for unkown values
			'start_time' : 'unknown',
			'team_1' : 'unknown',
			'team_1_Score' : '-',
			'team_2_Score' : '-',
			'team_2' : 'unknown'
	    }
  });
  // Return the model for the module
  return GameSchedule;
});