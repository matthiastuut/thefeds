//Tournaments Web App *(Backbone example application)*
/**
 *	Tournaments Web App (Backbone example application)
 */
 (function () {
  "use strict";
    var App = {
      Models: {},
      Collections: {},
      Views: {},
      Router: {},
      Data: {}
    };

    define([
      'app/router/router' // Request router.js
    ], function (Router) {
      var initialize = function () {
        // Pass in our Router module and call it's initialize function
        Router.initialize();
      }

      return {
        initialize: initialize
      };
    // # Game data #
    App.Data.Game = [
      { number: "1", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "1"},
      { number: "2", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "4"},
      { number: "3", team1: "Boomsquad", team1Score: "0", team2: "Burning Snow", team2Score: "4"},
      { number: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "4"},
      { number: "5", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "3"}
    ];
    
    console.log(scheduleData)

    });
}());