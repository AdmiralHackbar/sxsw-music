var React = require('react');



var VenueRow = React.createClass({displayName: "VenueRow",
    propTypes: {
        venue: React.PropTypes.object
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h3", null, this.props.venue.name), 
                React.createElement("span", null, this.props.venue.address)
            )
        )
    }
});

module.exports = VenueRow;
