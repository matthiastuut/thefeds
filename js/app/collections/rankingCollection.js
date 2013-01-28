// # Define game collection #
define([
  '/js/app/models/teamModel.js',
  '/js/app/config.js'
], function(model, config){
  rankingCollection = Backbone.Collection.extend({

  model: model,
  url: config.api_url,
  
  parse: function(data) {
      return data.objects;
  }  
  
});
  
  return rankingCollection;
});