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

    // Define config settings
    App.Data.Game = {
      tournamentID: 18590,
      access_token: '109f8a19ae',
      api_url: 'https://api.leaguevine.com/v1/games/',
      season_id: '20126'
    }

    App.Data.Tournament = {
      tournamentID: 18590,
      access_token: '109f8a19ae',
      api_url: 'https://api.leaguevine.com/v1/tournaments/',
      season_id: '20126'
    }
    
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
      
    console.log(scheduleData)

    });
}());