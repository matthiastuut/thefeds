// # Define game collection #
App.Collections.Game = Backbone.Collection.extend({
    // Specifiy model for this collection
  model: App.Models.Set,

  // Sort on team1Score
  comparator: function(game){
    return game.get("team1Score");
  },
  // Initialize collection *(backbone method)*
  initialize: function () {
    this.logMessage("Game collection initialized");
  },
  
  // Log message *(custom method)*
  logMessage: function (message) {
    console.log(message);
  }
});