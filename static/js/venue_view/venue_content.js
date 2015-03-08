var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;
    Paper = mui.Paper;
    Showcase = require('./showcase.js')

var VenueContent = React.createClass({displayName: "VenueContent",
    mixins: [Router.State],
    getInitialState: function() {
        return {
          showcases: [],
            venueName: "",
            address: ""
        };
    },

    componentDidMount: function(data) {
        $.get("/api/venue/" + this.getParams().venueName, function(result) {
            var showcases = []
            for (var i = 0; i < result.showcases.length; i++) {
                showcases.push(React.createElement(Showcase, {showcase: result.showcases[i]}));
            }
            this.setState(
                {
                    venueName: result.venue.name,
                    address: result.venue.address,
                    showcases: showcases
                }
            );
        }.bind(this));
    },
    render: function(){
        return (
        React.createElement("div", {className: "mui-app-content-canvas page-with-nav"}, 
            React.createElement("div", {className: "content"}, 
                React.createElement(Paper, {innerClassName: "venue-header-paper"}, 
                    React.createElement("h2", null, this.state.venueName), 
                    React.createElement("h4", null, this.state.address)
                ), 
            React.createElement("br", null), 
            this.state.showcases
            )
        )
        )
    }
});

module.exports = VenueContent;