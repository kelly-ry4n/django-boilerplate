from django.conf.urls import url
from django.contrib import admin

from backend.example import views as example

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', example.ExampleView.as_view()),
]
