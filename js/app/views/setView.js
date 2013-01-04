// # Define set view #
App.Views.Set = Backbone.View.extend({
  // Define element (this.el)  
  tagName: "tr",
  
  // Set reference to template
  template: $("#setTemplate").html(),
  
  // Initialize view *(backbone method)*
  initialize: function () {
    this.logMessage("Set view initialized");
  },
  
  // Render view *(backbone method)*
    render: function () {
    // Store template in variable
    var tmpl = _.template(this.template);
    
    // Inject the rendered tempate into the views element 
    $(this.el).html(tmpl(this.model.toJSON()));

    return this;
    },

  // Log message *(custom method)*
  logMessage: function (message) {
    console.log(message);
  }
});