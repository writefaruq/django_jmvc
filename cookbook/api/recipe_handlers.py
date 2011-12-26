from cookbook.models import Recipe
from piston.handler import BaseHandler

class RecipeHandler(BaseHandler):
    model = Recipe