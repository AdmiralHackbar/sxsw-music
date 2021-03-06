__author__ = 'maestro'


from django.core.management.base import BaseCommand, CommandError
from sxsw.models import Event, Showcase, Venue
from datetime import date, datetime

class Command(BaseCommand):
    help = 'Organize events into showcases'

    def __get_date(self, start_time):
        day = start_time.day
        if start_time.hour >=0 and start_time.hour <=5:
            day -= 1
        return date(year=start_time.year, month=start_time.month, day=day)
    def handle(self, *args, **options):

        # TODO: Learn how to do actual group bys
        venues = Venue.objects.all()

        for v in venues:
            days = {}
            events = Event.objects.filter(venue=v).exclude(start_time__isnull=True).order_by('start_time')
            for e in events:
                date_key = str(self.__get_date(e.start_time))
                l = days[date_key] if date_key in days else []
                l.append(e)
                days[date_key] = l
            for d in days:
                showcase_date = datetime.strptime(d, "%Y-%m-%d")
                showcases = Showcase.objects.filter(venue=v, date=showcase_date)
                if len(showcases) > 0:
                    showcase = showcases[0]
                else:
                    showcase = Showcase(venue=v, date=showcase_date)
                    showcase.save()

                for e in days[d]:
                    e.showcase = showcase
                    e.save()