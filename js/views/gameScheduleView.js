define([
], function(){
GameScheduleScheduleView = Backbone.View.extend({
    tagName: "li",
    // template: $("#scheduleTemplate").html(),
	
	
	// Render view
    render: function () {
         var tmpl = _.template($("#scheduleTemplate").html());
         
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});
  return GameScheduleScheduleView;
});
