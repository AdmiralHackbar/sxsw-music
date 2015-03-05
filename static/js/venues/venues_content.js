var React = require('react'),
    mui = require('material-ui');
    VenueRow = require('./venue_row.js');
    Nav = require('../nav.js');


var rows = [];
for (var i = 0; i < window.venues.length; i++) {
    rows.push(React.createElement(VenueRow, {venue: window.venues[i]}))
}
var VenuesContent = React.createClass({displayName: "VenuesContent",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement(Nav, null), 
                React.createElement("div", {className: "content"}, 
                    rows
                )
            )
        )
    }
});

module.exports = VenuesContent;