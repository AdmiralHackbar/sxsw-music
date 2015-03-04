from django.shortcuts import render
from scraper import parse_all_events
from models import Venue
# Create your views here.


def scrape(request):
    parse_all_events()


def __common_data(request, data):
    return data


def index(request):
    return render(request, 'index.html', __common_data(request, {}))


def venues(request):
    venue_set = Venue.objects.order_by('name').all()
    data = __common_data(request, {})
    data['venues'] = map(lambda v : {'name': v.name, 'address': v.address}, venue_set)
    return render(request, 'venues.html', data)
