// define league, a collection of tournaments
FD.Schedule = Backbone.Collection.extend({
    model: FD.GameSchedule,
	
	comparator : function(schedule) {
		// Sort by team name home team
		return schedule.get("team1");
	}
	
});