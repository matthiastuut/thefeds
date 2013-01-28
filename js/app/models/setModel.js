// # Define set model #
define([
  'app/config'
], function(config){
  var SetModel = Backbone.Model.extend({
    
    url: config.api + 'games/?tournament_id=' + config.tournamentID,

    // Initialize model *(backbone method)*
    initialize: function () {
      this.fetch();
    },
    
    defaults: {
      id : 0,
      team_1 : "unknown",
      team_2 : "unknown",
      team_1_score : "?",
      team_2_score : "?",
    },

  });
  return SetModel;
});
