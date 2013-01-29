// # Define set model #
define([
  'config'
], function(config){
  var SetModel = Backbone.Model.extend({
    
    // url: config.api_url + 'game_scores/?tournament_id=' + config.tournamentID,

    // Initialize model *(backbone method)*
    initialize: function () {
       // this.fetch();
    },
    
    defaults: {
      number : 0,
      team_1_score : "?",
      team_2_score : "?",
    },

  });
  return SetModel;
});
