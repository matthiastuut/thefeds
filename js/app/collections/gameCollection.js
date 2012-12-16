// # Define game collection #
Game = Backbone.Collection.extend({
    // Specifiy model for this collection
  model: Set,
  
  // Initialize collection *(backbone method)*
  initialize: function () {
    this.logMessage("Game collection initialized");
  },
  
  // Log message *(custom method)*
  logMessage: function (message) {
    console.log(message);
  }
});