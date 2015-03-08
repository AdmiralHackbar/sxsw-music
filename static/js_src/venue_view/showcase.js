var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var RaisedButton = mui.RaisedButton;

var Showcase = React.createClass({
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
                <a href={"#/artist/" + e.artist}><h4>{e.start} - {e.artist}({e.genre})</h4></a>
            );
        }
        this.setState({events: events});
    },
    render: function() {
        return (
            <Paper innerClassName="result">
                <h3>{this.props.showcase.date}</h3>
                {this.state.events}
            </Paper>
        )
    }
});

module.exports = Showcase;