// # Define set model #
define([
  'app/config'
], function(config){
  var SetModel = Backbone.Model.extend({
  // Set model defaults *(backbone method)*
  defaults: {
    "number" : 0,
    "team1" : "unknown",
    "team2" : "unknown",
    "team1Score" : "?",
    "team2Score" : "?",
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
  return SetModel;
});