var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;
    Nav = require('../nav.js');

var IndexContent = React.createClass({displayName: "IndexContent",
    render: function(){
        return (
        React.createElement("div", null, 
            React.createElement(Nav, null), 
            React.createElement("div", {className: "content"}, 
                React.createElement("form", {action: "/artists"}, 
                    React.createElement(TextField, {hintText: "artist name", name: "artistName"})
                )
            )
        )
        )
    }
});

module.exports = IndexContent;

