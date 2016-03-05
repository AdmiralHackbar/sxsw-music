var React = require('react');
Link = require('react-router').Link;

var IndexContent = React.createClass({displayName: "IndexContent",
    mixins: [Router.State],
    render: function(){
        return (
        React.createElement("div", {className: "mui-app-content-canvas page-with-nav"}, 
            React.createElement("div", {className: "content"}, 
                React.createElement("h2", null, "Browse showcases"), 
                React.createElement(Link, {to: "/showcases/2016-03-17"}, React.createElement("h3", null, "Tuesday")), 
                React.createElement(Link, {to: "/showcases/2015-03-18"}, React.createElement("h3", null, "Wednesday")), 
                React.createElement(Link, {to: "/showcases/2015-03-17"}, React.createElement("h3", null, "Tuesday")), 
                React.createElement(Link, {to: "/showcases/2015-03-18"}, React.createElement("h3", null, "Wednesday"))
            )
        )
        )
    }
});

module.exports = IndexContent;

