define([
  'models/gameScheduleModel',
  'config'
], function(GameSchedule, config){
  var Schedule = Backbone.Collection.extend({

    model: GameSchedule,
    url: config.api_url + "games/?tournament_id=" + config.tournamentID,
    // url: 'https://api.leaguevine.com/v1/games/?tournament_id=18519',
    
    parse: function(data) {
      console.log("url");
      console.log("scheduledata: ", data);

      return data.objects;
    },

    initialize: function(){
      console.log("Schedule Collection initialized");
    },
    comparator : function(schedule) {
		  return -schedule.get("start_time");
	   }


  });
  return Schedule;

});


