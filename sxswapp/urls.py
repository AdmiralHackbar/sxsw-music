from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:

    # Haystack URLS
    (r'^search/', include('haystack.urls')),

    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),


    url(r'^api/venues$', 'sxsw.views.venues', name='venues'),
    url(r'^api/artists/$', 'sxsw.views.artists', name='artists'),
    url(r'^api/artist/(?P<artist_name>.*)/$', 'sxsw.views.artist_view', name='artist'),

    url(r'^artist/.*/$', 'sxsw.views.index', name='index'),
    url(r'^artists$', 'sxsw.views.index', name='index'),
    url(r'^venues$', 'sxsw.views.index', name='index'),
    url(r'^$', 'sxsw.views.index', name='index')
)
