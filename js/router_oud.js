// file: router.js
$(function(){
    App.AppRouter = Backbone.Router.extend({
        // Define routes to pages
        routes: {
        // Define some URL routes
        '/schedule': 'showSchedule',
        '/game': 'showGame',
        '/ranking': 'showRanking',

        // Default
        '*path': 'defaultAction'
        },

        el: $("#page"),

        showSchedule: function (actions) {
            var self = this;

            $("#page").removeClass("loaded");

            setTimeout(function(){
                var matchModel = new App.MatchModel();
                self.matchesView = new App.MatchesView({model: matchModel});
                $("#page").addClass("loaded");
            }, 1000)
        },

        showGame: function (actions) {
            var self = this;

            $("#page").removeClass("loaded");

            setTimeout(function(){
                var setModel = new App.SetModel();
                this.gameView = new App.GameView({model: setModel});
                $("#page").addClass("loaded");
            }, 1000)
        },

        showRanking: function (actions) {
            var self = this;

            $("#page").removeClass("loaded");

            setTimeout(function(){
                var teamModel = new App.TeamModel();
                this.poolView = new App.PoolView({model: teamModel});
                $("#page").addClass("loaded");
            }, 1000)
        }
    });

    // start app
    App.app_router = new App.AppRouter();


    Backbone.history.start({ pushState: false });

});

