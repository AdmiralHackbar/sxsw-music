from django.shortcuts import render
from scraper import parse_all_events
from models import Venue, Artist
from haystack.inputs import Exact, Clean
from haystack.query import SearchQuerySet
# Create your views here.

artist_index = SearchQuerySet().models(Artist)

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


def __generate_artist_data(artists):
    data = map(lambda a:
                {'name': a.name,
                 'genre': a.genre
                },artists)
    return data

def artists(request):

    data = __common_data(request, {})

    if 'artistName' in request.GET:
        artistName = request.GET['artistName']
        data['artistName'] = artistName


        results = artist_index.filter(content=artistName)
        if len(results) > 0:
            artists = map(lambda a: a.object, results)
            data['artists'] = __generate_artist_data(artists)

    return render(request, 'artists.html', data)