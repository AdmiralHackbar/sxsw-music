__author__ = 'maestro'
from django.core.management.base import BaseCommand, CommandError
from sxsw.scraper import parse_all_events

class Command(BaseCommand):
    help = 'Scrapes the SXSW website'

    def handle(self, *args, **options):
        parse_all_events()