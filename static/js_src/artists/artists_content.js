var React = require('react'),
    mui = require('material-ui');
    ArtistRow = require('./artist_row.js');
    TextField = mui.TextField;

var rows = [];
for (var i = 0; i < window.artists.length; i++) {
    a = window.artists[i];
    rows.push(<ArtistRow name={a.name} genre={a.genre}/>)
}
var ArtistsContent = React.createClass({
    render: function(){
        return (
            <div>
                <form action="/artists">
                    <TextField hintText="artist name" name="artistName" />
                </form>
            {rows}
            </div>
        )
    }
});

module.exports = ArtistsContent;