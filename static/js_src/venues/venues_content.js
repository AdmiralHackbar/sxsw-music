var React = require('react'),
    mui = require('material-ui');
    VenueRow = require('./venue_row.js');


var rows = [];
for (var i = 0; i < window.venues.length; i++) {
    rows.push(<VenueRow venue={window.venues[i]}/>)
}
var VenuesContent = React.createClass({
    render: function(){
        return (
            <div>
            {rows}
            </div>
        )
    }
});

module.exports = VenuesContent;