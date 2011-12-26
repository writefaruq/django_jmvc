from django.db import models

# define models here

class Recipe(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __unicode__(self):
        return self.name