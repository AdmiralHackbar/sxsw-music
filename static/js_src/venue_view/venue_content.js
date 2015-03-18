var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;
    Paper = mui.Paper;
    ShowcaseRow = require('./showcase.js')

var VenueContent = React.createClass({
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
                showcases.push(<ShowcaseRow showcase={result.showcases[i]} />);
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
        <div className="mui-app-content-canvas page-with-nav">
            <div className="content">
                <Paper innerClassName="venue-header-paper">
                    <h2>{this.state.venueName}</h2>
                    <h4>{this.state.address}</h4>
                </Paper>
            <br/>
            {this.state.showcases}
            </div>
        </div>
        )
    }
});

module.exports = VenueContent;