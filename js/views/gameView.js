// # Define game view #
(function () {
  "use strict";
  define([
      'app/collections/gameCollection',
    'text!templates/game.html',
      'app/views/setView',
  ], function (Game, GameTemplate, SetView) {
    var GameView = Backbone.View.extend({
  // Define element (this.el)     
  el: $(".content"),
  
  // Initialize view *(backbone method)*
  initialize: function () {
    self = this;
    this.table = this.$el.find("#gameData");
    // Specify collection for this view

    this.collection = new Game();

    // when you fetch:
    // Backbone fetch => Collection parse => success callback
    this.collection.fetch({
      success: function(data) {
          //console.log(self.collection.toJSON());
          _.each(self.collection.models, function(model){
              // set a resource uri on the model
              //console.log("model data: ", model.toJSON());
              // console.log("model: ", model);
              model.url = model.get('resource_uri');
              // console.log(model.url);
          });
          self.render();
        }
    });
    
    this.collection.on("reset", this.render, this);
    this.collection.on("add", this.renderGame, this);
    this.collection.on("remove", this.removeSet, this);
  },
  
  events: {
      "click #showForm": "showForm"
  },

  // Render view *(backbone method)*
  render: function () {
    var self = this;
    self.$el.html();
    self.$el.html(GameTemplate);
    self.table.html("");

    _.each(self.collection.models, function (item) {
      self.renderGame(item);
    }, this);

  },
  
  // Render Set *(custom method)*
  renderGame: function (item) {
    // Create new instance of SetView

    var setView = new SetView({
      model: item
    });

    // Append the rendered HTML to the views element
    console.log(setView.render().el);
    this.$el.find("#gameData").append(setView.render().el);
  },


  showForm: function (e) {
    e.preventDefault();
      this.$el.find("#addSet").slideToggle();
  },

  // Log message *(custom method)*
  logMessage: function (message) {
    console.log(message);
  }
  
});

// Kickstart the application by creating an instance of GameView
return new GameView();
  });
}());