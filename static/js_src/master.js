var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var Menu = mui.Menu;
var IconButton = mui.IconButton;
var Nav = require('./nav.js');

var Master = React.createClass({

  mixins: [Router.State],

  render: function() {

    return (
      <AppCanvas predefinedLayout={1}>

            <Nav/>,

            <RouteHandler />

      </AppCanvas>
    );
  }

});

module.exports = Master;