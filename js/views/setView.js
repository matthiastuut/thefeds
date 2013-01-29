define([
], function(){
var SetView = Backbone.View.extend({
  // Define element (this.el)  
  tagName: "li",
  
  // Set reference to template
  template: _.template($("#setTemplate").html()),



  // Render view *(backbone method)*
  render: function () {
    var tmpl = this.template;
    this.$el.html(tmpl(this.model));
    return this;
  }
});
return SetView;
});