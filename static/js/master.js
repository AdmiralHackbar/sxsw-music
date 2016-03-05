var React = require('react');
var mui = require('material-ui');
var AppCanvas = mui.AppCanvas;
var AppBar = mui.AppBar;
var LeftNav = mui.LeftNav;

var Master = React.createClass({displayName: "Master",

  mixins: [Router.State],

  getInitialState: function() {
    return {
        menuOpen: false
    };
  },

    toggleMenu: function() {
        this.setState({menuOpen: !this.state.menuOpen})
    },

  render: function() {

    return (
      React.createElement(AppCanvas, {predefinedLayout: 1}, 
          React.createElement(AppBar, {
            title: "SXSW Music Showcases", 
              onLeftIconButtonTouchTap: this.toggleMenu}
          ), 

          React.createElement(LeftNav, {
              docked: false, 
              width: 200, 
              open: this.state.menuOpen, 
              onRequestChange: this.toggleMenu
          }

          ), 

          React.createElement("div", {className: "app-content"}, 
            this.props.children
          )

      )
    );
  }

});

module.exports = Master;