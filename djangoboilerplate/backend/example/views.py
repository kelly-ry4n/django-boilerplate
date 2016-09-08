from django.shortcuts import render
from django.views.generic.base import TemplateView
# Create your views here.


class ExampleView(TemplateView):

    template_name = 'example/example.html'
