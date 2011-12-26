steal('jquery/model', function(){

/**
 * @class Cookbook.Models.Recipe
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend recipe services.  
 */
$.Model('Cookbook.Models.Recipe',
/* @Static */
{
	//findAll: "GET /api/cookbook/recipes.json",
    findAll: function(params, success, error){
        return $.ajax({
            url : "/api/cookbook/recipes.json",
            dataType : "jsonp",
            data: params,
            success : success,
            error : error
        });
    },
    findOne :  function(params, success, error){
        return $.ajax({
            url : "/api/cookbook/recipes/{id}.json",
            dataType : "jsonp",
            data: params,
            success : success,
            error : error
        });
    },

  	create : function(params, success, error){
          return $.ajax({
              url : "/api/cookbook/recipes.json",
              dataType : "jsonp",
              data: params,
              success : success,
              error : error
          });
      },
 	update : function(params, success, error){
         return $.ajax({
             url : "/api/cookbook/recipes/{id}.json",
             dataType : "jsonp",
             data: params,
             success : success,
             error : error
         });
     },
  	destroy : function(params, success, error){
          return $.ajax({
              url : "/api/cookbook/recipes/{id}.json",
              dataType : "jsonp",
              data: params,
              success : success,
              error : error
          });
      }
},
/* @Prototype */
{});

})