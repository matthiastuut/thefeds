define([
], function(){
var SetView = Backbone.View.extend({
  // Define element (this.el)  
  tagName: "tr",
  
  // Set reference to template
  template: $("#setTemplate").html(),
  
  // Attach event handler to view elements
  events: {
      "click a.delete": "deleteSet"
  },

  // Delete tournament model
  deleteSet: function (e) {
    e.preventDefault();
    
    var removedType = this.model.get("team1Score").toLowerCase();
    
    if (_.indexOf(sets.getTypes(), removedType) !== -1) {
          
          sets.$el.find("#filter select").children("[value='" + removedType + "']").remove();
      }

    this.model.destroy();
    this.remove();
      
    
  },

  // Render view *(backbone method)*
  render: function () {
    var tmpl = _.template($("#setTemplate").html());
    this.$el.html(tmpl(this.model.toJSON()));
    return this;
  }
});
return SetView;
});