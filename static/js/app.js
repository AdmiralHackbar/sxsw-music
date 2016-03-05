React = require('react');
ReactDOM = require('react-dom');
Router = require('react-router').Router;
Route = require('react-router').Route;
IndexRoute = require('react-router').IndexRoute;
Link = require('react-router').Link;
browserHistory = require('react-router').browserHistory;


Master = require('./master.js');
IndexContent = require('./index/index_content.js');
VenuesContent = require('./venues/venues_content.js');
ArtistsContent = require('./artists/artists_content.js');
ArtistViewContent = require('./artist_view/artist_view_content.js');
VenueViewContent = require('./venue_view/venue_content.js');
ShowcasesContent = require('./showcases/showcases_content.js');
//
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
//
//window.React = React;
//
//var routes = (
//    <Route name="root" path="/" handler={Master}>
//        <DefaultRoute handler={IndexContent} />
//        <Route name="venues" handler={VenuesContent} />
//        <Route name="venue" path="venue/:venueName" handler={VenueViewContent} />
//        <Route name="artists" path="/artists" handler={ArtistsContent} >
//            <Route name="artists_search" path="/artists/:artistName" handler={ArtistsContent} />
//        </Route>
//        <Route name="artist" path="artist/*" handler={ArtistViewContent} />
//        <Route name="showcases" path="/showcases/:showcaseDate" handler={ShowcasesContent} />
//    </Route>
//)

ReactDOM.render(
    React.createElement(Router, {history: browserHistory}, 
        React.createElement(Route, {path: "/", component: Master}, 
            React.createElement(IndexRoute, {component: IndexContent}), 
            React.createElement(Route, {name: "showcases", path: "/showcases/:showcaseDate", component: ShowcasesContent}), 
            React.createElement(Route, {name: "artists", path: "/artists", component: ArtistsContent}, 
                React.createElement(Route, {name: "artists_search", path: "/artists/:artistName", component: ArtistsContent})
            ), 
            React.createElement(Route, {name: "artist", path: "artist/*", component: ArtistViewContent}), 
            React.createElement(Route, {name: "venues", component: VenuesContent}), 
            React.createElement(Route, {name: "venue", path: "venue/:venueName", component: VenueViewContent})
        )
    ),
    document.getElementById('content')
);