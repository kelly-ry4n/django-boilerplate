from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Ipsum(models.Model):

    title = models.CharField(max_length=255, unique=True)
    text = models.TextField()
