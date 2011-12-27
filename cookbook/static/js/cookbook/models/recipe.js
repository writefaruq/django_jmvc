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
            type: 'get',
            dataType : "json recipe.models",
            data: params,
            success : success,
            error : error
        });
    },
    findOne :  function(params, success, error){
        return $.ajax({
            url : "/api/cookbook/recipes/{id}.json",
            type: 'GET',
            dataType : "json recipe.models",
            data: params,
            success : success,
            error : error
        });
    },

  	create : function(params, success, error){
          return  $.post("/api/cookbook/recipes.json", params, success,"json");
      },
 	update : function(params, success, error){
         return $.ajax({
             url : "/api/cookbook/recipes/{id}.json",
             dataType : "json contact.models",
             data: params,
             success : success,
             error : error
         });
     },
  	destroy : function(params, success, error){
          return $.ajax({
              url : "/api/cookbook/recipes/{id}.json",
              dataType : "json",
              data: params,
              success : success,
              error : error
          });
      }
},
/* @Prototype */
{});

})