// # Define game collection #
define([
  'js/app/models/setModel.js'
], function(SetModel){
  var Game = Backbone.Collection.extend({
    // Specifiy model for this collection
  model: SetModel, 
  comparator: function (game) {
    return game.get('team1Score');
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