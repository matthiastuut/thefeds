// # Define game collection #
define([
  'models/setModel',
  'config'
], function(SetModel, config){
  var Game = Backbone.Collection.extend({
    
    model: SetModel,
    url: config.api_url + "game_scores/?tournament_id=" + config.tournamentID + "&game_id=" + 88502,
    
    parse: function(data) {
        console.log(data.objects[0].game_sets.toJSON());

        return data.objects[0].game_sets;
    },
    initialize: function () {
      console.log("Game collection initialized");
    }

 });
  return Game;

});