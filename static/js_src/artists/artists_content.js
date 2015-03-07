var React = require('react'),
    mui = require('material-ui');
    ArtistRow = require('./artist_row.js');
    Router = require('react-router');
    TextField = mui.TextField;

var artistRows = [];
for (var i = 0; i < window.artists.length; i++) {
  a = window.artists[i]
  artistRows.push(<ArtistRow name={a.name} genre={a.genre}/>)
}

var ArtistsContent = React.createClass({
    mixins: [Router.State, Router.Navigation],
      getInitialState: function() {
        return {
          rows: artistRows,
            artistName: ""
        };
      },
      //componentDidMount: function() {
      //    if (window.location.search.substring(1).length > 0) {
      //        $.get("/api/artists/?" + window.location.search.substring(1), function (result) {
      //            var rows = [];
      //            for (var i = 0; i < result.artists.length; i++) {
      //                a = result.artists[i]
      //                rows.push(<ArtistRow name={a.name} genre={a.genre}/>)
      //            }
      //            this.setState({rows: rows, artistName: result.artistName});
      //        }.bind(this));
      //    } else {
      //        this.setState({rows: artistRows});
      //    }
      //},
    handleSubmit: function(){
      $.get("/api/artists/?artistName=" + $('#artistName').val(), function (result) {
          var rows = [];
          for (var i = 0; i < result.artists.length; i++) {
              a = result.artists[i]
              rows.push(<ArtistRow name={a.name} genre={a.genre}/>)
          }
          this.setState({rows: rows, artistName: result.artistName});
      }.bind(this));
       return false;
    },
    render: function(){
        return (
            <div className="mui-app-content-canvas page-with-nav">
                <div className="content">
                    <form id="artistForm" onSubmit={this.handleSubmit}>
                        <TextField hintText="artist name" name="artistName" id="artistName"/>
                    </form>
                    {this.state.rows}
                </div>
            </div>
        )
    }
});

module.exports = ArtistsContent;