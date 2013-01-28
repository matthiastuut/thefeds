/* filename: js/router/router.js */


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
			rankingView:"",
			
			// Define routes to pages (hash urls #/page_name)
			routes: {
				'schedule'	:   'showSchedule',
				'game'		:   'showGame',
				'ranking'	:   'showRanking',
				'*path': 'defaultAction'
			},

			showRanking: function (actions) {
				rankingView.render();
			},

			showSchedule: function (actions) {
				scheduleView.render();
				console.log("rendering schedule"+ scheduleView);
			},

			showGame: function (actions) {
				gameView.render();
				console.log("dd");
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