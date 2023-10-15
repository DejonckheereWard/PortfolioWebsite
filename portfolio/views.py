from django.shortcuts import render
from django.http import HttpResponse, FileResponse


# Create your views here.


def index(request):
    return render(request, 'portfolio/index.html')


def projects(request, project_name):
    # Get the project name from the URL
    return render(request, f'portfolio/projects/{project_name}.html')


def about(request):
    return render(request, f'portfolio/about.html')


def contact(request):
    return render(request, f'portfolio/contact.html')
