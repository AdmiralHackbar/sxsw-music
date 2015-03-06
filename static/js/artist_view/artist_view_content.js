var React = require('react'),
    mui = require('material-ui');
    Paper = mui.Paper;
    EventRow = require('./event_row.js');
    Nav = require('../nav.js');
var emptyArtist = {};
emptyArtist.name = "";
emptyArtist.genre = "";
var ArtistViewContent = React.createClass({displayName: "ArtistViewContent",
    mixins: [Router.State, Router.Navigation],
      getInitialState: function() {
        return {
          rows: [],
            artist: emptyArtist
        };
      },
      componentDidMount: function(data) {
        alert(JSON.stringify(this.getParams()))
        $.get("/api/artist/" + this.getParams().splat, function(result) {
            var rows = [];
            for (var i = 0; i < result.events.length; i++) {
                e = result.events[i];
                rows.push(React.createElement(EventRow, {venue: e.venue, start: e.start, end: e.end}));
            }
            this.setState({rows: rows, artist: result.artist});
        }.bind(this));
      },
    render: function(){
        return (
        React.createElement("div", {className: "mui-app-content-canvas page-with-nav"}, 
            React.createElement("div", {className: "content"}, 
                React.createElement(Paper, {innerClassName: "artist-header-paper"}, 
                    React.createElement("h2", null, this.state.artist.name), 
                    React.createElement("h4", null, this.state.artist.genre)
                ), 
                React.createElement("br", null), 
                this.state.rows
            )
        )
        )
    }
});

module.exports = ArtistViewContent;