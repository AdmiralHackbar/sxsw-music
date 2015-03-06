var React = require('react'),
    mui = require('material-ui');
    VenueRow = require('./venue_row.js');
    Nav = require('../nav.js');


var VenuesContent = React.createClass({displayName: "VenuesContent",
    mixins: [Router.State],
      getInitialState: function() {
        return {
          rows: []
        };
      },
      componentDidMount: function() {
        $.get("/api/venues", function(result) {
            var rows = [];
            for (var i = 0; i < result.venues.length; i++) {
                rows.push(React.createElement(VenueRow, {venue: result.venues[i]}))
            }
            this.setState({rows: rows});
        }.bind(this));
      },
    render: function(){
        return (
            React.createElement("div", {className: "mui-app-content-canvas page-with-nav"}, 
                React.createElement("div", {className: "content"}, 
                    this.state.rows
                )
            )
        )
    }
});

module.exports = VenuesContent;