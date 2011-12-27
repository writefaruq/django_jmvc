from cookbook.models import Recipe
from piston.handler import BaseHandler


class RecipeHandler(BaseHandler):
    model = Recipe
    allowed_methods = ['GET', 'POST', 'PUT', 'DELETE']
    fields = ('id', 'name', 'description')

    #def create(self, request, *args, **kwargs):

