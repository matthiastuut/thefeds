// # Define game collection #
define([
  'js/app/models/setModel.js',
  'app/config'
], function(SetModel){
  GameCollection = Backbone.Collection.extend({
    // Specifiy model for this collection
  // Specifiy model for this collection
  model: SetModel,
   url: GameData,
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
  return GameCollection;

});