var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
Link = require('react-router').Link;

var VenueRow = React.createClass({displayName: "VenueRow",
    propTypes: {
        venue: React.PropTypes.object
    },
    render: function() {
        return (
            React.createElement(Link, {to: "#/venue/" + encodeURIComponent(this.props.venue.name)}, 
            React.createElement(Paper, {innerClassName: "result"}, 
                React.createElement("h3", null, this.props.venue.name), 
                React.createElement("span", null, this.props.venue.address)
            )
            )
        )
    }
});

module.exports = VenueRow;
