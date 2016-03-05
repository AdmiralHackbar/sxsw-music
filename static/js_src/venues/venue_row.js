var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
Link = require('react-router').Link;

var VenueRow = React.createClass({
    propTypes: {
        venue: React.PropTypes.object
    },
    render: function() {
        return (
            <Link to={"#/venue/" + encodeURIComponent(this.props.venue.name)}>
            <Paper innerClassName="result">
                <h3>{this.props.venue.name}</h3>
                <span>{this.props.venue.address}</span>
            </Paper>
            </Link>
        )
    }
});

module.exports = VenueRow;
