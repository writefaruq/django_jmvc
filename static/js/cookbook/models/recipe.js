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
    findAll: function(params, success, error){
        return $.ajax({
            url : "/api/cookbook/recipes",
            type: 'get',
            dataType : "json recipe.models",
            data: params,
            success : success,
            error : error
        });
    },
    findOne :  function(id, success, error){
        return $.ajax({
            url : "/api/cookbook/recipes/" + id,
            type: 'GET',
            dataType : "json recipe.models",
            data: {},
            success : success,
            error : error
        });
    },

  	create : function(params, success, error){
          return  $.post("/api/cookbook/recipes", params, success,"json");
      },
 	update : function(params, success, error){
         return $.ajax({
             url : "/api/cookbook/recipes/" + params['id'],
             dataType : "json recipe.models",
             data: params,
             success : success,
             error : error
         });
     },
  	destroy : function(id, success, error){
          //return $.post("/api/cookbook/recipes/"+id, {}, success);
          return $.ajax({
              url : "/api/cookbook/recipes/" + id,
              type : 'DELETE',
              dataType : "json recipe.models",
              data: {},
              success : success,
              error : error
          });
      }
},
/* @Prototype */
{});

})