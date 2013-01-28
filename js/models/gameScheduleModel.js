// Filename: models/project
define([
	'config'
], function(config){
  var GameSchedule = Backbone.Model.extend({

      url: : config.api_url + 'games/?tournament_id=' + config.tournamentID,

      // Initialize model *(backbone method)*
      initialize: function () {
        this.fetch();
      },
      
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