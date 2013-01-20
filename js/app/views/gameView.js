// # Define game view #
Views.Game = Backbone.View.extend({
  // Define element (this.el)     
  el: $("#game"),
  
  // Initialize view *(backbone method)*
  initialize: function () {
    this.table = this.$el.find("#gameData");
    // Specify collection for this view
    this.collection = new Collections.Game(Data.Game);
    
    this.render();
    
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
    self.table.html("");

    _.each(self.collection.models, function (item) {
      self.renderGame(item);
    }, this);
  },
  
  // Render Set *(custom method)*
  renderGame: function (item) {
    // Create new instance of Views.Set
    var setView = new Views.Set({
      model: item
    });

    // Append the rendered HTML to the views element
    this.table.append(setView.render().el);
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
    _.each(Data.Game, function (item) {
      if(item.number > currentHighest){
        currentHighest = item.number;
      }
    });

    newModel.number = parseInt(currentHighest)+1;

    // Push new data tot Data.Game
    Data.Game.push(newModel);

    if (_.indexOf(this.getTypes(), newModel.team1Score) === -1) {
           this.collection.add(new Models.Set(newModel));
          this.$el.find("#filter").find("select").remove().end().append(this.createSelect());
      } else {
          this.collection.add(new Models.Set(newModel));
      }
      
      this.collection.reset(Data.Game);
  },

  // Remove Set model
  removeSet: function (removedModel) {
    var removed = removedModel.attributes;
    _.each(Data.Game, function (item) {
      if (_.isEqual(item, removed)) {
        Data.Game.splice(_.indexOf(Data.Game, item), 1);
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
          this.collection.reset(Data.Game);
      } else {
        this.collection.reset(Data.Game, { silent: true });
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
var sets = new Views.Game();