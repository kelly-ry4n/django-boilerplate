from django.conf.urls import url, include
from django.contrib import admin

from rest_framework import routers
from backend.example import views as example

api_router = routers.DefaultRouter()
api_router.register(u'ipsums', example.IpsumViewSet)

urlpatterns = [
    url(r'^api/v1/', include(api_router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    url(r'^admin/', admin.site.urls),
    url(r'$', example.ExampleView.as_view()),
]
