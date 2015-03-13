from django.db import models

# Create your models here.


class Artist(models.Model):
    name = models.CharField(max_length=255, primary_key=True)
    genre = models.CharField(max_length=255, null=True)
    url = models.CharField(max_length=255, null=True)


class Venue(models.Model):
    name = models.CharField(max_length=255, primary_key=True)
    address = models.CharField(max_length=255)


class Showcase(models.Model):
    venue = models.ForeignKey(Venue, null=False)
    date = models.DateField(null=False)


class Event(models.Model):
    id = models.CharField(max_length=16, primary_key=True)
    artist = models.ForeignKey(Artist)
    start_time = models.DateTimeField(null=True)
    end_time = models.DateTimeField(null=True)
    venue = models.ForeignKey(Venue, null=True)
    showcase = models.ForeignKey(Showcase, null=True)