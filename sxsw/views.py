from django.shortcuts import render
from django.http import HttpResponseNotFound, HttpResponse
from models import Venue, Artist, Event, Showcase
from haystack.inputs import Exact, Clean
from haystack.query import SearchQuerySet
import json
# Create your views here.

artist_index = SearchQuerySet().models(Artist)


def __common_data(request, data):
    return data


def index(request):
    return render(request, 'index.html', __common_data(request, {}))


def venues(request):
    venue_set = Venue.objects.order_by('name').all()
    data = __common_data(request, {})
    data['venues'] = map(lambda v : {'name': v.name, 'address': v.address}, venue_set)
    # return render(request, 'venues.html', data)
    return HttpResponse(json.dumps(data), content_type='application/json')

def __generate_artist_data(artists):


    data = map(lambda a:
                {'name': a.name,
                 'genre': a.genre
                }, artists)
    return data

def artists(request):

    data = __common_data(request, {})

    if 'artistName' in request.GET:
        artistName = request.GET['artistName']
        data['artistName'] = artistName

        if 'genre' in request.GET:
            results = artist_index.filter(genre=request.GET['genre'], content=Clean(artistName))
        else:
            results = artist_index.filter(content=Clean(artistName))
        if len(results) > 0:
            artists = map(lambda a: a.object, results)
            data['artists'] = __generate_artist_data(artists)
    else:
        artists = Artist.objects.order_by('name').all()
        data['artists'] = __generate_artist_data(artists)
    return HttpResponse(json.dumps(data), 'application/json')


def artist_view(request, artist_name):
    artist =  Artist.objects.filter(name=artist_name)
    if len(artist) == 0:
        return HttpResponseNotFound('Artist "%s" not found.' % (artist_name,))


    data = __common_data(request, {})

    ## Artist data
    artist = artist[0]
    artist_data = {
        'name': artist.name,
        'genre': artist.genre
    }
    if artist.url and artist.url.startswith('http'):
        artist_data['url'] = artist.url
    data['artist'] = artist_data

    ## Events
    events = Event.objects.filter(artist=artist)
    event_data = []
    for event in events:
        e = {}
        if event.venue:
            print 'has_venue'
            e['venue'] = event.venue.name
            e['start'] = event.start_time.strftime('%A, %B %d %I:%M%p') if event.start_time else ""
            e['end'] = event.end_time.strftime('%A, %B %d %I:%M%p') if event.end_time else ""
            event_data.append(e)
    print event_data
    data['events'] = event_data
    return HttpResponse(json.dumps(data), 'application/json')


def __get_showcase_data(showcase):
    events = Event.objects.filter(showcase=showcase).order_by('start_time')
    event_data = []
    print len(events)
    for event in events:
        event_data.append( {
        'artist': event.artist.name,
        'genre': event.artist.genre,
        'start': event.start_time.strftime('%I:%M%p') if event.start_time else ""
        })
    return {
        'date': showcase.date.strftime("%A, %B %d"),
        'events': event_data
    }

def venue(request, venue_name):
    v = Venue.objects.filter(name=venue_name)
    if len(v) == 0:
        return HttpResponseNotFound
    v = v[0]

    data = __common_data(request, {})
    data['venue'] = {'name': v.name, 'address': v.address}

    showcases = Showcase.objects.filter(venue=v).order_by('date')
    events = Event.objects.filter(venue=v)
    print len(showcases)
    print len(events)
    showcase_data = []
    for s in showcases:
        showcase_data.append(__get_showcase_data(s))

    data['showcases'] = showcase_data
    return HttpResponse(json.dumps(data), 'application/json')


