var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var EventRow = React.createClass({displayName: "EventRow",
    propTypes: {
        venue: React.PropTypes.string,
        start: React.PropTypes.string,
        end: React.PropTypes.string
    },
    render: function() {
        return (
                React.createElement("a", {href: "#/venue/" + encodeURIComponent(this.props.venue)}, 
                    React.createElement(Paper, {innerClassName: "result"}, 
                        React.createElement("h4", null, this.props.venue), 
                        React.createElement("span", null, this.props.start, " - ", this.props.end)
                    )
                )
        )
    }
});

module.exports = EventRow;