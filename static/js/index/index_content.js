var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;
    Nav = require('../nav.js');

var IndexContent = React.createClass({displayName: "IndexContent",
    mixins: [Router.State],
    render: function(){
        return (
        React.createElement("div", {className: "mui-app-content-canvas page-with-nav"}, 
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

