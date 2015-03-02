__author__ = 'maestro'
from haystack import indexes
from models import Artist


class ArtistIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, model_attr="name")
    artist_name = indexes.CharField(model_attr="name")

    def get_model(self):
        return Artist

    def index_queryset(self, using=None):
        return self.get_model().objects.all()