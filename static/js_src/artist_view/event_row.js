var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var EventRow = React.createClass({
    propTypes: {
        venue: React.PropTypes.string,
        start: React.PropTypes.string,
        end: React.PropTypes.string
    },
    render: function() {
        return (
                <Paper innerClassName="result">
                    <h4>{this.props.venue}</h4>
                    <span>{this.props.start} - {this.props.end}</span>
                </Paper>
        )
    }
});

module.exports = EventRow;