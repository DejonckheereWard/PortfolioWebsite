from django.urls import path

from . import views  # Views defined in views.py

# Define url patters in this list, using path("/ur-url", views.ur_view, name='name-of-this-view'
urlpatterns = [
    path("", views.index, name='index'),
    path("projects/<str:project_name>", views.projects, name='projects'),
    path("about", views.about, name='about'),
    path("contact", views.contact, name='contact'),
    path("resume", views.resume, name='resume'),
]
