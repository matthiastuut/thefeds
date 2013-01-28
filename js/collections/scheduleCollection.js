define([
  'js/models/gameScheduleModel.js',
  'js/config.js'
], function(GameSchedule, config){
  var Schedule = Backbone.Collection.extend({

    model: GameSchedule,
    url: config.api_url + "games/?tournament_id=" + config.tournamentID,
    // url: 'https://api.leaguevine.com/v1/games/?tournament_id=18519',
    
    parse: function(data) {

      console.log("data to parse: ", data);

      return data.objects;
    },

    initialize: function(){
    },
    comparator : function(schedule) {
		// Sort by team name home team
		return schedule.get("team1");
	}


  });
  return Schedule;

});


