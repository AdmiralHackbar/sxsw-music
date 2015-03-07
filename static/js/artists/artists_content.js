var React = require('react'),
    mui = require('material-ui');
    ArtistRow = require('./artist_row.js');
    TextField = mui.TextField;

var artistRows = [];
for (var i = 0; i < window.artists.length; i++) {
  a = window.artists[i]
  artistRows.push(React.createElement(ArtistRow, {name: a.name, genre: a.genre}))
}

var ArtistsContent = React.createClass({displayName: "ArtistsContent",
    mixins: [Router.State],
      getInitialState: function() {
        return {
          rows: artistRows,
            artistName: ""
        };
      },
      componentDidMount: function() {
          if (window.location.search.substring(1).length > 0) {
              $.get("/api/artists/?" + window.location.search.substring(1), function (result) {
                  var rows = [];
                  for (var i = 0; i < result.artists.length; i++) {
                      a = result.artists[i]
                      rows.push(React.createElement(ArtistRow, {name: a.name, genre: a.genre}))
                  }
                  this.setState({rows: rows, artistName: result.artistName});
              }.bind(this));
          } else {
              this.setState({rows: artistRows});
          }
      },
    render: function(){
        return (
            React.createElement("div", {className: "mui-app-content-canvas page-with-nav"}, 
                React.createElement("div", {className: "content"}, 
                    React.createElement("form", {action: "/#/artists"}, 
                        React.createElement(TextField, {hintText: "artist name", name: "artistName"})
                    ), 
                    this.state.rows
                )
            )
        )
    }
});

module.exports = ArtistsContent;