var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Showcase = React.createClass({displayName: "Showcase",
    mixins: [Router.State],
    propTypes: {
        showcase: React.PropTypes.object
    },
    getInitialState: function() {
        return {
          events: []
        };
    },
    componentDidMount: function(data) {
        var events = [];
        for (var i = 0; i < this.props.showcase.events.length; i++) {
            e = this.props.showcase.events[i];
            events.push(
                React.createElement("a", {href: "#/artist/" + encodeURIComponent(e.artist)}, React.createElement("h4", null, e.start, " - ", e.artist, "(", e.genre, ")"))
            );
        }
        this.setState({events: events});
    },
    render: function() {
        return (
            React.createElement(Paper, {innerClassName: "result"}, 
                React.createElement("h3", null, this.props.showcase.venue.name), 
                React.createElement("h4", null, this.props.showcase.venue.address), 
                this.state.events
            )
        )
    }
});

module.exports = Showcase;