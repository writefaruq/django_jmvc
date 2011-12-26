from django.contrib import admin
from cookbook.models import Recipe


class RecipeAdmin(admin.ModelAdmin):
    pass

admin.site.register(Recipe, RecipeAdmin)