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
    this.table = this.$el.find("#gameData");
    // Specify collection for this view
    this.collection = new GameCollection();
    // when you fetch:
    // Backbone fetch => Collection parse => success callback
    this.collection.fetch({
      success: function(data) {
          //console.log(self.collection.toJSON());
          _.each(self.collection.models, function(model){
              // set a resource uri on the model
              //console.log("model data: ", model.toJSON());
              //console.log("model: ", model);
              model.url = model.get('resource_uri');
              //console.log(model.url);
          });
          self.render();
        }
    });
    
    this.$el.find("#filter").append(this.createSelect());
    
    this.on("change:filterType", this.filterByType, this);
    
    this.collection.on("reset", this.render, this);
    this.collection.on("add", this.renderGame, this);
    this.collection.on("remove", this.removeSet, this);
  },
  
  events: {
      "change #filter select": "setFilter",
      "click #add": "addSet",
      "click #showForm": "showForm"
  },

  // Render view *(backbone method)*
  render: function () {
    var self = this;
    self.$el.html();
    self.$el.html(GameTemplate);
    console.log(self);
    self.table.html("");
      // console.log(self.$el.html);
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
    // this.table.append(setView.render().el);
    this.$el.find("#gameData").append(setView.render().el);
  },

  // Add Set model
  addSet: function (e) {
    e.preventDefault();
    var newModel = {};
    $("#addSet").children("input").each(function(i, el) {
      if ($(el).val() !== "") {
        newModel[el.id] = $(el).val();
      }
    });

    // Find highest number and set new number for new model
    var currentHighest = 0;
    _.each(GameData, function (item) {
      if(item.number > currentHighest){
        currentHighest = item.number;
      }
    });

    newModel.number = parseInt(currentHighest)+1;

    // Push new data tot GameData
    GameData.push(newModel);

    if (_.indexOf(this.getTypes(), newModel.team1Score) === -1) {
           this.collection.add(new SetModel(newModel));
          this.$el.find("#filter").find("select").remove().end().append(this.createSelect());
      } else {
          this.collection.add(new SetModel(newModel));
      }
      
      this.collection.reset(GameData);
  },

  // Remove Set model
  removeSet: function (removedModel) {
    var removed = removedModel.attributes;
    _.each(GameData, function (item) {
      if (_.isEqual(item, removed)) {
        GameData.splice(_.indexOf(GameData, item), 1);
      }
    });
  },

  getTypes: function () {
    return _.uniq(this.collection.pluck("team1Score"), false, function (type) {
      return type.toLowerCase();
    });
  },
  
  createSelect: function () {
      var filter = this.$el.find("#filter"),
          select = $("<select/>", {
              html: "<option value='all'>all</option>"
          });
      _.each(this.getTypes(), function (item) {
          var option = $("<option/>", {
              value: item.toLowerCase(),
              text: item.toLowerCase()
          }).appendTo(select);
      });
      return select;
  },
  

  
  setFilter: function (e) {
      this.filterType = e.currentTarget.value;
      this.trigger("change:filterType");
  },
  
  filterByType: function () {
      if (this.filterType === "all") {
          this.collection.reset(GameData);
      } else {
        this.collection.reset(GameData, { silent: true });
        var filterType = this.filterType,
            filtered = _.filter(this.collection.models, function (item) {
            return item.get("team1Score").toLowerCase() === filterType;
        });
        
        this.collection.reset(filtered);
      }
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