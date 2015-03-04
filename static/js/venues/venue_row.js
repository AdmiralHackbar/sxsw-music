var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var VenueRow = React.createClass({displayName: "VenueRow",
    propTypes: {
        venue: React.PropTypes.object
    },
    render: function() {
        return (
            React.createElement("a", {href: "/venue/" + this.props.venue.name}, 
            React.createElement(Paper, {innerClassName: "venue-paper"}, 
                React.createElement("h3", null, this.props.venue.name), 
                React.createElement("span", null, this.props.venue.address)
            )
            )
        )
    }
});

module.exports = VenueRow;
