define([], function (template) {

	var teamstand = Backbone.View.extend({
			
		tagName: "tr",
		className: "row",
			
		// Set reference to template
		template: _.template($("#teamStats").html()),
		
		initialize: function(){

		},

		render: function () {
			
			var tmpl = this.template;
			this.$el.html(tmpl(this.model.toJSON()));
			
			return this;
		}
	});

	return teamstand;
	
});