
(function () {
	"use strict";
	define([
		'collections/rankingCollection',
		'text!templates/ranking.html',
		'views/teamstand',
		
	], function (collection, template, teamstand) {

		var rankingView = Backbone.View.extend({
			
			el: $(".content"),
			
			initialize: function(){		
				this.collection = new collection();

			},
			
			events: {
				"change #teamselect": "changeTeam"
			},
			
			renderTeam: function(team){
			
				this.render();
				
			},
			
			changeTeam: function(){
			
				var teamID = $("#teamselect").val();
				
				// add and remove classes
				$(".row").removeClass("selected");
				$("."+teamID).parent().addClass("selected");

          		$(".backbtn").attr("href", "#/schedule/"+teamID);
				
				$(".tabs a:first-child").attr("href", "#/ranking/"+teamID);
				$(".tabs a:last-child").attr("href", "#/schedule/"+teamID);

				
				
			},
			
			render: function () {
			
		
				self = this;
				
				console.log("render");
				// set template on the content
				$(".content").html(template);
				
				
				this.collection.fetch({
				  success: function(data) {
				  
				  	$(".preloader").remove();
				  	$(".content").addClass("animated fadeInDown");
          			$(".backbtn").hide();

				  	// empty the option
				  	$("#teamselect").html("").append("<option value='0' disabled selected id='selectteam'>Selecteer een team</option>");	
				  
				      //console.log(self.collection.toJSON());
				      _.each(self.collection.models, function(model){

				          console.log("model",model);
				          
				          self.renderPool(model);				          
				      });
				      
				      
				    }
				    
				});
				
			},
			
			renderPool: function(item){
			
				var teamView = new teamstand({
					model: item
				});
				
				this.$el.find(".pool").append(teamView.render().el);
				
				console.log(item);
				// append options
				$("#teamselect").append("<option value='"+item.get("team_id")+"'>"+item.get("team").name+"</option>");

			},			
			
			getTeaminfo: function(url){
				
				console.log(url);
				
			}
			
		});
		return new rankingView();
	});
}());