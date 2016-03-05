var React = require('react');
var mui = require('material-ui');
var AppCanvas = mui.AppCanvas;
var AppBar = mui.AppBar;
var LeftNav = mui.LeftNav;

var Master = React.createClass({

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
      <AppCanvas predefinedLayout={1}>
          <AppBar
            title="SXSW Music Showcases"
              onLeftIconButtonTouchTap={this.toggleMenu}
          />

          <LeftNav
              docked={false}
              width={200}
              open={this.state.menuOpen}
              onRequestChange={this.toggleMenu}
          >

          </LeftNav>

          <div className="app-content">
            {this.props.children}
          </div>

      </AppCanvas>
    );
  }

});

module.exports = Master;