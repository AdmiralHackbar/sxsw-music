var React = require('react');
    mui = require('material-ui');
    ArtistRow = require('./artist_row.js');
    TextField = mui.TextField;
var browserHistory = require('react-router').browserHistory;

var ArtistsContent = React.createClass({
    mixins: [Router.State],
      getInitialState: function() {
        return {
          rows: [],
            artistName: this.props.params.artistName
        };
      },
    getResults: function(artistName) {
      if (artistName != "" && artistName != undefined) {
          $.get("/api/artists/?artistName=" + artistName, function (result) {
              var rows = [];
              if (result.artists != undefined) {
                  for (var i = 0; i < result.artists.length; i++) {
                      a = result.artists[i]
                      rows.push(<ArtistRow name={a.name} genre={a.genre}/>)
                  }
              } else {
                  rows.push(<h3>No results for '{artistName}' were found.</h3>)
              }
              this.setState({rows: rows});
          }.bind(this));
      } else {
          this.setState({rows: []});
      }
    },
      componentDidMount: function() {
        this.getResults(this.state.artistName);
      },
    handleSubmit: function(e){
        e.preventDefault();
        this.setState({artistName: $("#artistName").val(), rows: []})
        this.getResults($("#artistName").val());
        browserHisory.push("/artists/" + encodeURIComponent($("#artistName")).val());

    },
    render: function(){

        return (
            <div className="mui-app-content-canvas page-with-nav">
                <div className="content">
                    <form id="artistForm" onSubmit={this.handleSubmit}>
                        <TextField hintText="artist name" name="artistName" id="artistName"/>
                    </form>

                </div>
            </div>
        );
    }
});

module.exports = ArtistsContent;