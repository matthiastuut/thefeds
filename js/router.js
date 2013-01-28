/* filename: js/app/router/router.js */


(function () {
	"use strict";
	define([
		'config',
		// 'views/tournament/tournament',
		'views/gameView',
		'views/scheduleView',
		// 'views/tournament/ranking',
		 // '../views/gameView'
		 'views/rankingView'
		
	//], function (config, homeView, tournamentView, scheduleView, rankingView, gameView) {
		], function (config, gameView, scheduleView, rankingView) {
		var AppRouter = Backbone.Router.extend({
			tournamentView:"",
			
			// Define routes to pages (hash urls #/page_name)
			routes: {
				'schedule'	:   'showSchedule',
				'game'		:   'showGame',
				'*path': 'defaultAction'
			},

			showTournament: function (actions) {
				tournamentView.render();
			},

			showSchedule: function (actions) {
				scheduleView.render();
				console.log("rendering schedule"+ scheduleView);
			},

			showGame: function (actions) {
				gameView.render();
			},

			defaultAction: function (actions) {
				rankingView.render();
			}
		});

		var initialize = function () {
			console.log("router init!");
			var app_router = new AppRouter();
			Backbone.history.start();
		};

		return {
			initialize: initialize
		};
	});
}());