var React = require('react'),
    mui = require('material-ui');
    ArtistRow = require('./artist_row.js');
    Router = require('react-router');
    TextField = mui.TextField;

var ArtistsContent = React.createClass({displayName: "ArtistsContent",
    mixins: [Router.State, Router.Navigation],
      getInitialState: function() {
        return {
          rows: [],
            artistName: this.getParams().artistName
        };
      },
    getResults: function(artistName) {
      if (artistName != "" && artistName != undefined) {
          $.get("/api/artists/?artistName=" + artistName, function (result) {
              var rows = [];
              if (result.artists != undefined) {
                  for (var i = 0; i < result.artists.length; i++) {
                      a = result.artists[i]
                      rows.push(React.createElement(ArtistRow, {name: a.name, genre: a.genre}))
                  }
              } else {
                  rows.push(React.createElement("h3", null, "No results for '", artistName, "' were found."))
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
        this.transitionTo("/artists/" + $("#artistName").val())

    },
    render: function(){

        return (
            React.createElement("div", {className: "mui-app-content-canvas page-with-nav"}, 
                React.createElement("div", {className: "content"}, 
                    React.createElement("form", {id: "artistForm", onSubmit: this.handleSubmit}, 
                        React.createElement(TextField, {hintText: "artist name", name: "artistName", id: "artistName"})
                    ), 
                    this.state.rows
                )
            )
        )
    }
});

module.exports = ArtistsContent;