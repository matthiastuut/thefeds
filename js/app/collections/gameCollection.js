// # Define game collection #
define([
  'js/app/models/setModel.js'
], function(SetModel){
  App.Collections.Game = Backbone.Collection.extend({
    // Specifiy model for this collection
  // Specifiy model for this collection
  model: App.Models.Set,
  url: App.Data.Game.api_url,
  parse: function(data) {
      // what do we get from the API?    
      // we could log data, right? Let's!
      console.log("data to parse: ", data);
      
      return data.objects;
  },

  // Sort on team1Score
  // comparator: function(game){
  //   return game.get("team1");
  // },
  // Initialize collection *(backbone method)*
  initialize: function () {
    this.logMessage("Game collection initialized");
  },
  
  // Log message *(custom method)*
  logMessage: function (message) {
    console.log(message);
  }

 });
  return Game;

});