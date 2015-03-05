var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var ArtistRow = React.createClass({displayName: "ArtistRow",
    propTypes: {
        name: React.PropTypes.string,
        genre: React.PropTypes.string
    },
    render: function() {
        return (
                React.createElement(Paper, {innerClassName: "result"}, 
                    React.createElement("a", {href: "/artist/" + this.props.name}, React.createElement("h3", null, this.props.name)), 
                    React.createElement("span", null, this.props.genre)
                )
        )
    }
});

module.exports = ArtistRow;