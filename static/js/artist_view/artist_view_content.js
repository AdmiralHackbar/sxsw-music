var React = require('react'),
    mui = require('material-ui');
    Paper = mui.Paper;
    EventRow = require('./event_row.js');
    Nav = require('../nav.js');

var rows = [];
for(var i = 0; i < window.events.length; i++) {
    e = window.events[i];
    rows.push(React.createElement(EventRow, {venue: e.venue, start: e.start, end: e.end}));
}

var ArtistViewContent = React.createClass({displayName: "ArtistViewContent",
    render: function(){
        return (
        React.createElement("div", null, 
            React.createElement(Nav, null), 
            React.createElement("div", {className: "content"}, 
                React.createElement(Paper, {innerClassName: "artist-header-paper"}, 
                    React.createElement("h2", null, window.artist.name), 
                    React.createElement("h4", null, window.artist.genre)
                ), 
                React.createElement("br", null), 
                rows
            )
        )
        )
    }
});

module.exports = ArtistViewContent;