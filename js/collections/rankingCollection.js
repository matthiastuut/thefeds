// # Define game collection #
define([
  'models/teamModel',
  'config'
], function(model, config){
	
	var rankingCollection = Backbone.Collection.extend({

  		model: model,
  
		// haal alle teams van de meegegeven season op
		url: config.api_url+"pools/?tournament_id="+config.tournamentID,
  
		parse: function(data) {
			return data.objects[0].standings;
		},
  
		initialize: function () {
			console.log("Ranking collection initialized");
		} 
  
	});

return rankingCollection;

});