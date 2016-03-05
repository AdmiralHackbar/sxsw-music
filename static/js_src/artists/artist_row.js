var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
Link = require('react-router').Link;

var ArtistRow = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        genre: React.PropTypes.string
    },
    render: function() {
        return (
                <Paper innerClassName="result">
                    <Link to={"/artist/" + encodeURIComponent(this.props.name)}><h3>{this.props.name}</h3></Link>
                    <span>{this.props.genre}</span>
                </Paper>
        )
    }
});

module.exports = ArtistRow;