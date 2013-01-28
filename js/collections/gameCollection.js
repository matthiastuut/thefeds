// # Define game collection #
define([
  'models/setModel',
  'config'
], function(SetModel, config){
  var Game = Backbone.Collection.extend({
    
    model: SetModel,
    url: config.api_url + "games/?tournament_id=" + config.tournamentID,
    // url: 'https://api.leaguevine.com/v1/game_scores/?tournament_id=18519',
    
    parse: function(data) {

        console.log("data to parse: ", data);

        return data.objects;
    },

    initialize: function () {
      console.log("Game collection initialized");
    }

 });
  return Game;

});