var React = require('react');



var VenueRow = React.createClass({
    propTypes: {
        venue: React.PropTypes.object
    },
    render: function() {
        return (
            <div>
                <h3>{this.props.venue.name}</h3>
                <span>{this.props.venue.address}</span>
            </div>
        )
    }
});

module.exports = VenueRow;
