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
      initialize: function (game_id) {
        this.table = this.$el.find("#gameData");
        this.collection = new Game();
      },

      // Render view *(backbone method)*
      render: function (game_id) {
        self = this;
        

        // set template on the content
        $(".content").html(GameTemplate);

        // Fetch
      	this.collection.fetch({
      	  success: function(data) {
          $(".preloader").remove();
          $(".content").addClass("animated fadeInDown");
          $(".backbtn").show();
            var sets = [];
    	      //console.log(self.collection.toJSON());
    	      _.each(self.collection.models, function(model){
    	          
    	          model.url = model.get('resource_uri');

                if(model.attributes.game_id == game_id){
                  sets.push(model);
                }
    	      });
            console.log(sets[0].toJSON().game_sets);
            _.each(sets[0].toJSON().game_sets, function(set){
              self.renderGame(set);
            });
    	    }
          ,

          error: function(data){
              // error message
              self.$el.html('<span class="error"><strong>Oops..</strong> er is iets foutgegaan</span>');

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

  getGame: function (game_id) {
    // Specify collection for this view
    this.render(game_id);
  }

  
});

// Kickstart the application by creating an instance of GameView
return new GameView();
  });
}());	