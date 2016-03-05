var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
Link = require('react-router').Link;

var EventRow = React.createClass({
    propTypes: {
        venue: React.PropTypes.string,
        start: React.PropTypes.string,
        end: React.PropTypes.string
    },
    render: function() {
        return (
                <Link to={"/venue/" + encodeURIComponent(this.props.venue)}>
                    <Paper innerClassName="result">
                        <h4>{this.props.venue}</h4>
                        <span>{this.props.start} - {this.props.end}</span>
                    </Paper>
                </Link>
        )
    }
});

module.exports = EventRow;