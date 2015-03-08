React = require('react');
Router = require('react-router');
Route = Router.Route;
DefaultRoute = Router.DefaultRoute;
Master = require('./master.js');
IndexContent = require('./index/index_content.js');
VenuesContent = require('./venues/venues_content.js');
ArtistsContent = require('./artists/artists_content.js');
ArtistViewContent = require('./artist_view/artist_view_content.js');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

window.React = React;

var routes = (
    React.createElement(Route, {name: "root", path: "/", handler: Master}, 
        React.createElement(DefaultRoute, {handler: IndexContent}), 
        React.createElement(Route, {name: "venues", handler: VenuesContent}), 
        React.createElement(Route, {name: "artists", path: "/artists", handler: ArtistsContent}, 
            React.createElement(Route, {name: "artists_search", path: "/artists/:artistName", handler: ArtistsContent})
        ), 
        React.createElement(Route, {name: "artist", path: "artist/*", handler: ArtistViewContent})
    )
)

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('content'));
});