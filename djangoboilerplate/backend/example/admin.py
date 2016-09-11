from django.contrib import admin
from .models import Ipsum

# Register your models here.

admin.site.register(Ipsum, admin.ModelAdmin)
