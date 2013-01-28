// # Define game view #
(function () {
  "use strict";
  define([
      'collections/gameCollection',
    'text!templates/game.html',
      'views/setView',
  ], function (Game, GameTemplate, SetView) {
    var GameView = Backbone.View.extend({     
      el: $(".content"),
  
      // Initialize view *(backbone method)*
      initialize: function () {
        this.table = this.$el.find("#gameData");
        // Specify collection for this view

        this.collection = new Game();
        
      },

      // Render view *(backbone method)*
      render: function () {
        self = this;

        // set template on the content
        $(".content").html(GameTemplate);

        // Fetch
      	this.collection.fetch({
      	  success: function(data) {
    	      //console.log(self.collection.toJSON());
    	      _.each(self.collection.models, function(model){
    	          // set a resource uri on the model
    	          //console.log("model data: ", model.toJSON());
    	          // console.log("model: ", model);
    	          model.url = model.get('resource_uri');
    	          // console.log(model.url);
                self.renderGame(model);
    	      });
    	    }
    	 });
  	
  	// this.collection.on("reset", this.render, this);
  	// this.collection.on("add", this.renderGame, this);
  	// this.collection.on("remove", this.removeSet, this);
  
  
    // var self = this;
    // self.$el.html();
    // self.$el.html(GameTemplate);
    // self.table.html("");

    // _.each(self.collection.models, function (item) {
    //   self.renderGame(item);
    // }, this);

  },
  
  // Render Set *(custom method)*
  renderGame: function (item) {
    // Create new instance of SetView

    var setView = new SetView({
      model: item
    });

    // Append the rendered HTML to the views element
    this.$el.find("#gameData").append(setView.render().el);
  },


  showForm: function (e) {
    e.preventDefault();
      this.$el.find("#addSet").slideToggle();
  },
  
});

// Kickstart the application by creating an instance of GameView
return new GameView();
  });
}());	