var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;

var IndexContent = React.createClass({displayName: "IndexContent",
    render: function(){
        return (
        React.createElement("div", null, 
            React.createElement("form", {action: "/artists"}, 
                React.createElement(TextField, {hintText: "artist name", name: "artistName"})
            )
        )
        )
    }
});

module.exports = IndexContent;

