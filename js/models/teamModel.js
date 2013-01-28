// # Define set model #
define([
  'app/config'
], function(config){
  var teamModel = Backbone.Model.extend({
  // Set model defaults *(backbone method)*
  defaults: {
  
  },
  
  // Initialize model *(backbone method)*
  initialize: function () {
    console.log("team model initialized");
  },
  

});
  return teamModel;
});