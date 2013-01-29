// # Define game collection #
define([
  'models/setModel',
  'config'
], function(SetModel, config){
  var Game = Backbone.Collection.extend({
    model: SetModel,
    url: config.api_url + "game_scores/?limit=200&tournament_id=" + config.tournamentID,
    
    parse: function(data) {

      console.log(data.objects);
      return data.objects;
    },

    initialize: function () {
      console.log("Game collection initialized");
    }

 });
  return Game;

});