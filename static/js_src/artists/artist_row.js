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
                <Paper innerClassName="result">
                    <a href={"/#/artist/" + this.props.name}><h3>{this.props.name}</h3></a>
                    <span>{this.props.genre}</span>
                </Paper>
        )
    }
});

module.exports = ArtistRow;