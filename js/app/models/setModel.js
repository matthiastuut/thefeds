// # Define set model #
App.Models.Set = Backbone.Model.extend({
  // Set model defaults *(backbone method)*
  defaults: {
    "number" : 0,
    "team1" : "unknown",
    "team2" : "unknown",
    "team1Score" : "unknown",
    "team2Score" : "unknown",
  },
  
  // Initialize model *(backbone method)*
  initialize: function () {
    this.logMessage("Set model initialized");
  },
  
  // Log message *(custom method)*
  logMessage: function (message) {
    console.log(message);
  }
});