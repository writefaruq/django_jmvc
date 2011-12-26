from django.conf.urls.defaults import patterns, include, url
from piston.resource import Resource

from cookbook.api.recipe_handlers import RecipeHandler

urlpatterns = patterns('',
    url(r'^recipes.json$', Resource(RecipeHandler)),
    url('^recipes/(?P<id>\w+).json$', Resource(RecipeHandler)),
)