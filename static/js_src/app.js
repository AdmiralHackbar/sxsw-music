React = require('react');
Router = require('react-router');
Route = Router.Route;
DefaultRoute = Router.DefaultRoute;
Master = require('./master.js');
IndexContent = require('./index/index_content.js');
VenuesContent = require('./venues/venues_content.js');
ArtistsContent = require('./artists/artists_content.js');
ArtistViewContent = require('./artist_view/artist_view_content.js');
VenueViewContent = require('./venue_view/venue_content.js');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

window.React = React;

var routes = (
    <Route name="root" path="/" handler={Master}>
        <DefaultRoute handler={IndexContent} />
        <Route name="venues" handler={VenuesContent} />
        <Route name="venue" path="venue/:venueName" handler={VenueViewContent} />
        <Route name="artists" path="/artists" handler={ArtistsContent} >
            <Route name="artists_search" path="/artists/:artistName" handler={ArtistsContent} />
        </Route>
        <Route name="artist" path="artist/*" handler={ArtistViewContent} />
    </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});