from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:

    # Haystack URLS
    (r'^search/', include('haystack.urls')),

    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^venues$', 'sxsw.views.venues', name='venues'),
    url(r'^artists$', 'sxsw.views.artists', name='artists'),
    url(r'^artist/(?P<artist_name>.*)/$', 'sxsw.views.artist_view', name='artist'),
    url(r'^$', 'sxsw.views.index', name='index')
)
