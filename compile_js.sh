
## jsx
jsx static/js_src/ static/js/

## browserify
browserify static/js/artists.js -o static/js/artists_bundle.js
browserify static/js/artist_view.js -o static/js/artist_view_bundle.js
browserify static/js/index.js -o static/js/index_bundle.js
browserify static/js/venues.js -o static/js/venues_bundle.js

## CSS
lessc static/css/main.less > static/css/main.css