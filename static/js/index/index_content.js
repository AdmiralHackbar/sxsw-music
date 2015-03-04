var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;

var pageContent;
    if (window.results.length == 0) {
        pageContent = React.createElement("div", null, "Nothing")
    } else {
        pageContent = React.createElement("div", null, "Stuff")
    }

var IndexContent = React.createClass({displayName: "IndexContent",
    render: function(){
        return (
        React.createElement("div", null, 
            React.createElement("form", null, 
                React.createElement(TextField, {hintText: "artist name", name: "artistName"})
            ), 
            React.createElement("div", null, 
                pageContent
            )
        )
        )
    }
});

module.exports = IndexContent;

