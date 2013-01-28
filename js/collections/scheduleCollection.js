define([
  'js/app/models/gameScheduleModel.js'
], function(GameSchedule){
  var Schedule = Backbone.Collection.extend({

    model: GameSchedule,
    initialize: function(){
    },
    comparator : function(schedule) {
		// Sort by team name home team
		return schedule.get("team1");
	}


  });
  return Schedule;

});


