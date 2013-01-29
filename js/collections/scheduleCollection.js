define([
  'models/gameScheduleModel',
  'config'
], function(GameSchedule, config){
  var Schedule = Backbone.Collection.extend({

    model: GameSchedule,
    url: config.api_url + "games/?tournament_id=" + config.tournamentID,
    
    parse: function(data) {
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


