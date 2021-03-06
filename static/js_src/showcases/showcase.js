var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
Link = require('react-router').Link;

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
                <Link to={"/artist/" + encodeURIComponent(e.artist)}><h4>{e.start} - {e.artist}({e.genre})</h4></Link>
            );
        }
        this.setState({events: events});
    },
    render: function() {
        return (
            <Paper innerClassName="result">
                <h3>{this.props.showcase.venue.name}</h3>
                <h4>{this.props.showcase.venue.address}</h4>
                {this.state.events}
            </Paper>
        )
    }
});

module.exports = Showcase;