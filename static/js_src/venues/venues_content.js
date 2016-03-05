var React = require('react'),
    mui = require('material-ui');
    VenueRow = require('./venue_row.js');


var VenuesContent = React.createClass({
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
                rows.push(<VenueRow venue={result.venues[i]}/>)
            }
            this.setState({rows: rows});
        }.bind(this));
      },
    render: function(){
        return (
            <div className="mui-app-content-canvas page-with-nav">
                <div className="content">
                    {this.state.rows}
                </div>
            </div>
        )
    }
});

module.exports = VenuesContent;