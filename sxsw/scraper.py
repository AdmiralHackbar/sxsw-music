__author__ = 'maestro'

import urllib2
from lxml import html
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from models import Venue, Event, Artist
from datetime import datetime, tzinfo
import pytz

__LIST_URL = "http://schedule.sxsw.com/?conference=music&lsort=name&day=ALL&event_type=showcase&a=%s"
url = "http://schedule.sxsw.com/?conference=music&lsort=name&day=ALL&event_type=showcase&a=m"

__EVENT_URL = "http://schedule.sxsw.com/2016/events/event_%s"

__CHARACTERS = list('1abcdefghijklmnopqrstuvwxyz')

__TIMEZONE = tzinfo()

def parse_artist_list(character):
    data = urllib2.urlopen(__LIST_URL % (character,))
    site_data = data.read()
    tree = html.fromstring(site_data)

    elements = tree.xpath('//div[@class="conf-desc item-blocking"]/a')
    ids = map(lambda x: x.attrib['id'].split('_')[1], elements )
    return ids


def parse_event_page(id):
    try:
        data = urllib2.urlopen(__EVENT_URL % (id,))
    except urllib2.URLError:
        print "Failed to open page for %s" % (id,)
        return None
    site_data = data.read()
    tree = html.fromstring(site_data)

    # Parse artist name
    artist = tree.xpath('//div[@class="title"]/h1/text()')[0].strip()

    # Parse Date and Time
    date = tree.xpath('//div[@id="detail_time"]/p//b/text()')
    date = date[0].strip() if len(date) > 0 else None

    time = tree.xpath('//div[@id="detail_time"]/p/text()')
    time = time[2].strip() if len(time) >= 3 else None

    # Venue
    location_name = tree.xpath('//a[@class="detail_venue"]/text()')
    location_name = location_name[0].strip() if len(location_name) >= 1 else None

    location_address = tree.xpath('//span[@class="address"]/text()')
    location_address = location_address[0].strip() if len(location_address) >= 1 else None

    # Genre
    details = tree.xpath('//div[@class="details"]/div/div/a')
    genre = details[0].text if len(details) > 0 else None
    url = details[1].attrib['href'] if len(details) >= 2 else None

    print "%s (%s)\t %s - %s\t %s (%s) \t%s" % (artist, genre, date, time, location_name, location_address, url)

    return (artist, date, time, location_name, location_address, genre, url)


def get_venue(location_name, location_address):
    try:
        venue = Venue.objects.get(pk=location_name)
        return venue
    except ObjectDoesNotExist:
        print "Creating venue (%s, %s)" % (location_name, location_address)
        venue = Venue(name=location_name, address=location_address)
        venue.save()
        return venue

def get_artist(artist_name, genre, url):
    try:
        return Artist.objects.get(pk=artist_name)
    except ObjectDoesNotExist:
        print "Creating Artist (%s, %s, %s)" % (artist_name, genre, url)
        artist = Artist(name=artist_name, genre=genre, url=url)
        artist.save()
        return artist

def __get_date_time(march_day, time_string):
    march_day = int(march_day)
    time_chunks = time_string.split(':')
    hour = int(time_chunks[0])

    if time_string.endswith("PM") and hour != 12:
        hour += 12

    if time_string.endswith("AM") and hour == 12:
        hour -= 12

    if time_string.endswith('AM') and hour < 5:
        march_day +=1

    minutes = int(''.join([c for c in time_chunks[1] if c in '1234567890']))
    time = datetime(year=2016, month=3, day=march_day, hour=hour, minute=minutes)
    return time


def save_event(id, artist_name, date, time, location_name, location_address, genre, url):
    venue = None
    if location_name and location_address:
        venue = get_venue(location_name, location_address)

    artist = get_artist(artist_name, genre, url)

    try:
        event = Event.objects.get(pk=id)
    except ObjectDoesNotExist:
        print "Creating event %s" % (id,)
        event = Event(id=id, artist=artist)

    if venue:
        event.venue = venue

    if date and time:
        # Dates are in the format "Friday March, 20"
        date_chunks = date.split(' ')

        # Times are as a range, ie, "12:00AM - 12:40AM"
        # if they are between 12:00AM and 4:00 AM, they are really for the "next day"
        #ie, "Friday March, 20 12:00AM - 12:40AM" is really 12:00AM March 21st"
        time_chunks = time.split(' ')

        if len(time_chunks) > 0:
            start_date = __get_date_time(date_chunks[2], time_chunks[0])
            event.start_time = start_date
        if len(time_chunks) > 3:
            end_date = __get_date_time(date_chunks[2], time_chunks[2])
            event.end_time = end_date

    event.save()


def parse_all_events():
    all_ids = []
    for c in __CHARACTERS:
        ids = parse_artist_list(c)
        all_ids.extend(ids)
        for id in ids:
            try:
                artist, date, time, location_name, location_address, genre, url = parse_event_page(id)
                if artist:
                    save_event(id, artist, date, time, location_name, location_address, genre, url)
            except TypeError:
                print "failed to load event %s" % (id,)

    events = Event.objects.all()
    event_ids = map(lambda x: x.id, events)

    print "parsed %d events " % (len(all_ids),)
    print "have %d events in the db" % (len(event_ids),)
    deleted_ids = filter(lambda e: e not in all_ids, event_ids)
    print "Deleted %d ids" % (len(deleted_ids), )

if __name__ == "__main__":
    artists = parse_all_events()
    artist_names = map(lambda x: x, artists)