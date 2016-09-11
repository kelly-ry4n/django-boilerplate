from django.shortcuts import render
from django.views.generic.base import TemplateView
from rest_framework.viewsets import ModelViewSet

from .models import Ipsum
from .serializers import IpsumSerializer

class ExampleView(TemplateView):

    template_name = 'example/example.html'


class IpsumViewSet(ModelViewSet):

    serializer_class = IpsumSerializer

    queryset = Ipsum.objects.all()
    model = Ipsum

