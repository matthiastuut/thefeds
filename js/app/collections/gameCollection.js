// # Define game collection #
define([

  '/js/app/models/setModel.js',
  '/js/app/config.js'
], function(SetModel, config){
  var Game = Backbone.Collection.extend({
    
    model: SetModel,
    // url: config.api + "games/?tournament_id=" + config.tournamentID
    url: 'https://api.leaguevine.com/v1/games/?tournament_id=18519',
    
    parse: function(data) {

        console.log("data to parse: ", data);
        return data.objects;
    },

    initialize: function () {
      console.log("Game collection initialized");
    }

 });
  return GameCollection;

});