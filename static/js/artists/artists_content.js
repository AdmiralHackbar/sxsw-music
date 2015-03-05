var React = require('react'),
    mui = require('material-ui');
    ArtistRow = require('./artist_row.js');
    TextField = mui.TextField;
    Nav = require('../nav.js');

var rows = [];
for (var i = 0; i < window.artists.length; i++) {
    a = window.artists[i];
    rows.push(React.createElement(ArtistRow, {name: a.name, genre: a.genre}))
}
var ArtistsContent = React.createClass({displayName: "ArtistsContent",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement(Nav, null), 
                React.createElement("div", {className: "content"}, 
                    React.createElement("form", {action: "/artists"}, 
                        React.createElement(TextField, {hintText: "artist name", name: "artistName"})
                    ), 
                    rows
                )
            )
        )
    }
});

module.exports = ArtistsContent;