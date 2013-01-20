/* filename: js/router.js */

(function () {
	"use strict";
	define([
		'../config',
		'../views/homeView',
		// 'views/tournament/tournament',
		'../views/scheduleView',
		// 'views/tournament/ranking',
		// 'views/tournament/game'
		
	//], function (config, homeView, tournamentView, scheduleView, rankingView, gameView) {
		], function (config, homeView, scheduleView) {
		var AppRouter = Backbone.Router.extend({
			tournamentView:"",
			
			// Define routes to pages (hash urls #/page_name)
			routes: {
				// Define some URL routes
				//'tournament':   'showTournament',
				//'ranking'	: 	'showRanking',
				'/schedule'	:   'showSchedule',
				//'game'		:   'showGame',

				// Default
				'*path': 'defaultAction'
			},

			showTournament: function (actions) {
				tournamentView.render();
			},

			showSchedule: function (actions) {
				scheduleView.render();
				console.log("rendering schedule");
			},

			showRanking: function (actions) {
				rankingView.render();
			},

			showGame: function (actions) {
				gameView.render();
			},

			defaultAction: function (actions) {
				homeView.render();
				console.log("rendering home");
			}
		});

		var initialize = function () {
			var app_router = new AppRouter();
			Backbone.history.start();
		};

		return {
			initialize: initialize
		};
	});
}());