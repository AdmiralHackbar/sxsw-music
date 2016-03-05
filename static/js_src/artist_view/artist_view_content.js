var React = require('react'),
    mui = require('material-ui');
    Paper = mui.Paper;
    EventRow = require('./event_row.js');
var emptyArtist = {};
emptyArtist.name = "";
emptyArtist.genre = "";
var ArtistViewContent = React.createClass({
    mixins: [Router.State, Router.Navigation],
      getInitialState: function() {
        return {
          rows: [],
            artist: emptyArtist
        };
      },
      componentDidMount: function(data) {
        $.get("/api/artist/" + this.props.params.splat, function(result) {
            var rows = [];
            for (var i = 0; i < result.events.length; i++) {
                e = result.events[i];
                rows.push(<EventRow venue={e.venue} start={e.start} end={e.end}/>);
            }
            this.setState({rows: rows, artist: result.artist});
        }.bind(this));
      },
    render: function(){
        return (
        <div className="mui-app-content-canvas page-with-nav">
            <div className="content">
                <Paper innerClassName='artist-header-paper'>
                    <h2>{this.state.artist.name}</h2>
                    <h4>{this.state.artist.genre}</h4>
                </Paper>
                <br/>
                {this.state.rows}
            </div>
        </div>
        )
    }
});

module.exports = ArtistViewContent;