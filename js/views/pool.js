// Define pool view
App.Views.Pool = Backbone.View.extend({
	// Define element (this.el)     
	el: $("#pool_ranking"),
	
	// Initialize view
    initialize: function () {
		// Specify collection for this view
		this.collection = new App.Collections.Teams(App.Data.Pool);
		
		// create filter option	
		this.createFilter();
		
		// create sort option
		this.createSort();
		
		this.collection.on("reset", this.render, this);
		this.collection.on("add", this.render, this);
		this.collection.on("remove", this.removeTeam, this);
		
		// Render view
        this.render();
        
        // Attach custom event handler
        this.on("change:filterType", this.filterByType, this);
        this.on("change:sortType", this.sortByType, this);
        
        
    },
    
    
    events: {
    	'change .teamfilter' : 'filterList',
    	'change .teamsort' : 'sortList',
    	'click #addranking button[type=submit]' : 'addRanking'
    },
    
    removeTeam: function(team){
    	var removedname = team.attributes.team;

    	
    	_.each(App.Data.Pool, function (item) {
			itemname = item.team;
    	    if (_.isEqual(itemname, removedname)) {
    	        App.Data.Pool.splice(_.indexOf(App.Data.Pool, item), 1);
    	       
    	    }
    	});	  
    },

    
    addRanking: function(e){
    	e.preventDefault();
    	
    	var newModel = {};
    	
    	$("#addranking fieldset").children("input").each(function (i, el) {
    	    if ($(el).val() !== "") {
    	        newModel[el.id] = $(el).val();
    	  	}
    	});
    	
    	App.Data.Pool.push(newModel);
    	this.collection.add(new App.Models.Team(newModel));
    	console.log(this.collection);
    	
    	this.collection.reset(App.Data.Pool);
    	this.createFilter();
    },
    
    filterList: function(e){
    
     	this.filterType = e.currentTarget.value;
     	
     	// Trigger custom event handler
     	this.trigger("change:filterType");
    },
    
    sortList: function(e){
     	this.sortType = e.currentTarget.value;
     	
     	// Trigger custom event handler
     	this.trigger("change:sortType");
    },
    
    // Get types for schedulingFormat select box
    getTypes: function () {
        return _.uniq(this.collection.pluck("team"), false, function (type) {
            return type.toLowerCase();
        });
    },
    
    getFields: function () {
		return _.keys(App.Data.Pool[0], false, function (key) {      	
        	return key;
        }); 
    },
    
    
    createFilter: function(){
    	$("select.teamfilter").remove();
    	var select = $("<select/>", {
    	    html: "<option value='all'>all</option>"
    	}).addClass("teamfilter");
    	
    	
    	_.each(this.getTypes(), function (item) {
    	    var option = $("<option/>", {
    	        value: item.toLowerCase(),
    	        text: item.toLowerCase()
    	    }).appendTo(select);
    	});

    	$(".tablefilter").after(select);  	
  	    
    },
    
    createSort: function(){
        
		var select = $("<select />", {
		    html: "<option value='all' disabled selected>Sorteer</option>"
		}).addClass("teamsort");
		
		
		_.each(this.getFields(), function (item) {
		    var option = $("<option/>", {
		        value: item,
		        text: item
		    }).appendTo(select);
		});
	
		$(".tablesort").after(select);  	
      	    
    },
    
    // Filter the collection
    filterByType: function () {
    	
        if (this.filterType === "all") {
            this.collection.reset(App.Data.Pool);
        } else {
            this.collection.reset(App.Data.Pool, { silent: true });
            var filterType = this.filterType,
                filtered = _.filter(this.collection.models, function (item) {
                return item.get("team").toLowerCase() === filterType;
            });
            
            this.collection.reset(filtered);
        }
    },
    
    
    sortByType: function () {
	    this.collection.reset(App.Data.Pool, { silent: true });
	    var sortType = this.sortType,
	    
	        sorted = _.sortBy(this.collection.models, function (item) {
	        
	        return item.get(sortType); 
	    });
	    
	   	if(sortType != "team"){
	    	sorted = sorted.reverse();
	    }
	    
	    this.collection.reset(sorted);
    },

	
	// Render view
    render: function () {

        var self = this;
		var count = 1;
		
		
		this.$el.find("table tr").not(':first-child').remove("");
		
		_.each(this.collection.models, function (item) {
			item.set("index", count);
			count++;
			
			self.renderPool(item);
		}, this);

    },
    
    
	
	// Render schedule
    renderPool: function (item) {
		// Create new instance of GameView
		var teamView = new App.Views.Team({
            model: item
        });

		// Append the rendered HTML to the views element
        this.$el.children('table').append(teamView.render().el);
        
    }
});

// Kickstart the application by creating an instance of LeagueView
var schedule = new App.Views.Pool();