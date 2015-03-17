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
                React.createElement("h2", null, "Browse showcases"), 
                React.createElement("a", {href: "/#/showcases/2015-03-17"}, React.createElement("h3", null, "Tuesday")), 
                React.createElement("a", {href: "/#/showcases/2015-03-18"}, React.createElement("h3", null, "Wednesday")), 
                React.createElement("a", {href: "/#/showcases/2015-03-19"}, React.createElement("h3", null, "Thursday")), 
                React.createElement("a", {href: "/#/showcases/2015-03-20"}, React.createElement("h3", null, "Friday")), 
                React.createElement("a", {href: "/#/showcases/2015-03-21"}, React.createElement("h3", null, "Saturday")), 
                React.createElement("a", {href: "/#/showcases/2015-03-17"}, React.createElement("h3", null, "Sunday"))
            )
        )
        )
    }
});

module.exports = IndexContent;

