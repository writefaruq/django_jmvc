from django.conf.urls.defaults import patterns, include, url
from piston.resource import Resource

from cookbook.api.recipe_handlers import RecipeHandler

urlpatterns = patterns('',
    url(r'^recipes$', Resource(RecipeHandler)),
    url('^recipes/(?P<id>\d)$', Resource(RecipeHandler)),
)