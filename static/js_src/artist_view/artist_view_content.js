var React = require('react'),
    mui = require('material-ui');
    Paper = mui.Paper;
    EventRow = require('./event_row.js');
    Nav = require('../nav.js');

var rows = [];
for(var i = 0; i < window.events.length; i++) {
    e = window.events[i];
    rows.push(<EventRow venue={e.venue} start={e.start} end={e.end}/>);
}

var ArtistViewContent = React.createClass({
    render: function(){
        return (
        <div>
            <Nav/>
            <div className="content">
                <Paper innerClassName='artist-header-paper'>
                    <h2>{window.artist.name}</h2>
                    <h4>{window.artist.genre}</h4>
                </Paper>
                <br/>
                {rows}
            </div>
        </div>
        )
    }
});

module.exports = ArtistViewContent;