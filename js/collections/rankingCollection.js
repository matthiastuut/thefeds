// # Define game collection #
define([
  'models/teamModel',
  'config'
], function(model, config){
  rankingCollection = Backbone.Collection.extend({

  model: model,
  
  // haal alle teams van de meegegeven season op
  url: config.api_url+"pools/?tournament_id="+config.tournamentID,
  
  parse: function(data) {
 	  // get info from 1st pool
 	  console.log("Rankingdata",data.objects[0].standings)
      return data.objects[0].standings;
  }  
  
});
  
  return rankingCollection;
});