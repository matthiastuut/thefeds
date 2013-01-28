// # Define game collection #
define([
  'models/setModel',
  'config'
], function(SetModel, config){
  var Game = Backbone.Collection.extend({
    
    model: SetModel,
    url: config.api_url + "game_scores/?tournament_id=" + config.tournamentID,
    game_id: 90024, // straks uit de route
    
    parse: function(data) {
        // returnData = [];
        // _.each(data.objects, function(set){
        //   if(set.game_id == this.game_id){
        //     returnData.push(set);
        //     console.log("Set: ", set);
        //   }
        // });

        return data.objects;
    },
    initialize: function () {
      console.log("Game collection initialized");
    }

 });
  return Game;

});