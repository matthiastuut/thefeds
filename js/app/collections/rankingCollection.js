// # Define game collection #
define([
  '/js/app/models/teamModel.js',
  '/js/app/config.js'
], function(model, config){
  rankingCollection = Backbone.Collection.extend({

  model: model,
  
  // haal alle teams van de meegegeven season op
  url: config.api_url+"pools/?tournament_id="+config.tournamentID,
  
  parse: function(data) {
 	  // get info from 1st pool
      return data.objects[0].standings;
  }  
  
});
  
  return rankingCollection;
});