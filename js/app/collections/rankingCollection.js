// # Define game collection #
define([
  '/js/app/models/teamModel.js',
  '/js/app/config.js'
], function(model, config){
  rankingCollection = Backbone.Collection.extend({

  model: model,
  
  // haal alle teams van de meegegeven season op
  url: config.api_url+"tournament_teams/?tournament_ids=%5b"+config.tournamentID+"%5d",
  
  parse: function(data) {
  	console.log(data.objects);
      return data.objects;
  }  
  
});
  
  return rankingCollection;
});