from django.shortcuts import render
from scraper import parse_all_events
# Create your views here.

def scrape(request):
    parse_all_events()


def index(request):
    return render(request, 'index.html')
