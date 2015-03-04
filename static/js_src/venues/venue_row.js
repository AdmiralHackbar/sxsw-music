var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var VenueRow = React.createClass({
    propTypes: {
        venue: React.PropTypes.object
    },
    render: function() {
        return (
            <a href={"/venue/" + this.props.venue.name}>
            <Paper innerClassName="venue-paper">
                <h3>{this.props.venue.name}</h3>
                <span>{this.props.venue.address}</span>
            </Paper>
            </a>
        )
    }
});

module.exports = VenueRow;
