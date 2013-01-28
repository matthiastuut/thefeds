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
				'/schedule/:team'	:   'showScheduleTeam',
				'/schedule'			:   'showSchedule',
				'/game'				:   'showGame',
				'/ranking'			: 	'showRanking',
				'*path'				: 'defaultAction'
			},

			showRanking: function (actions) {
				rankingView.render();
				console.log("Render Ranking");
			},

			showSchedule: function (actions) {
				scheduleView.render();
				console.log("Render Schedule");
			},
			
			showScheduleTeam: function (actions) {
				scheduleView.renderTeam(actions);
			},	
			

			showGame: function (actions) {
				gameView.render();
				console.log("Render Game");
			},

			defaultAction: function (actions) {
				rankingView.render();
				console.log("Render Default Ranking");
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