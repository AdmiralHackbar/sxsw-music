var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var ArtistRow = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        genre: React.PropTypes.string
    },
    render: function() {
        return (
            <a href={"/artist/" + this.props.name}>
                <Paper innerClassName="result">
                    <h3>{this.props.name}</h3>
                    <span>{this.props.genre}</span>
                </Paper>
            </a>
        )
    }
});

module.exports = ArtistRow;