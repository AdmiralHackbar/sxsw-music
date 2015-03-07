var React = require('react'),
  mui = require('material-ui'),
    LeftNav = mui.LeftNav,
    MenuItem = mui.MenuItem,
    RaisedButton = mui.RaisedButton;
    AppBar = mui.AppBar;
    IconButton = mui.IconButton;
    Router = require('react-router');
    Link = Router.Link;

menuItems = [
  {
     type: MenuItem.Types.LINK,
     payload: '/',
     text: 'Home'
  },
  //{ type: MenuItem.Types.SUBHEADER, text: 'Account' },
  //  // TODO: Set generate this in Django template based on whether or not the user is logged in.
  //{
  //   type: MenuItem.Types.LINK,
  //   payload: '#login',
  //   text: 'Login'
  //},
    { type: MenuItem.Types.SUBHEADER, text: 'Music' },
    {
        route: 'artists',
        text: "Artists"
    },
    {
        route: 'venues',
        text: "Venues"
    }
];

var menuButton = (
  <IconButton
    className="github-icon-button"
    iconClassName="muidocs-icon-custom-github"
    linkButton={true} />
);

var Nav = React.createClass({
    mixins: [Router.State, Router.Navigation],

   render: function(){
       return (
        <div>
            <AppBar
              className="mui-dark-theme"
              onMenuIconButtonTouchTap={this._toggleLeftNav}
              title="SXSW - Music"
              zDepth={0}>
            {menuButton}
            </AppBar>
            <LeftNav ref="leftNav" menuItems={menuItems} docked={false} onChange={this._onChange} />,
        </div>

       );
   },
    _toggleLeftNav: function() {
        this.refs.leftNav.toggle();
    },
    _onChange: function(e, key, payload){
        this.refs.leftNav.close();
        this.transitionTo(payload.route);
    }
});

module.exports = Nav;