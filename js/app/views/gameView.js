// # Define game view #
GameView = Backbone.View.extend({
  // Define element (this.el)     
  el: $("#game"),
  
  // Initialize view *(backbone method)*
  initialize: function () {
    this.logMessage("Game view initialized");
        
    // Specify collection for this view
    this.collection = new Game(gameData);
    
    // Render view
    this.render();
  
  },
  
  // Render view *(backbone method)*
  render: function () {
    var self = this;

    _.each(this.collection.models, function (item) {
      self.renderSet(item);
    }, this);
  },
  
  // Render tournament *(custom method)*
  renderSet: function (item) {
    // Create new instance of TournamentView
    var setView = new SetView({
      model: item
    });

    // Append the rendered HTML to the views element
    this.$el.append(setView.render().el);
  },

  // Log message *(custom method)*
  logMessage: function (message) {
    console.log(message);
  }
  
});