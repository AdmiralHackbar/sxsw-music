var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var Menu = mui.Menu;
var IconButton = mui.IconButton;
var Nav = require('./nav.js');

var Master = React.createClass({displayName: "Master",

  mixins: [Router.State],

  render: function() {

    return (
      React.createElement(AppCanvas, {predefinedLayout: 1}, 

            React.createElement(Nav, null), ",", 

            React.createElement(RouteHandler, null)

      )
    );
  }

});

module.exports = Master;