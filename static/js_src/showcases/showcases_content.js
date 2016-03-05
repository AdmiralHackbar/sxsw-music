var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;
    Paper = mui.Paper;
    Showcase = require('./showcase.js');


var ShowcasesContent = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
        return {
          showcases: [],
            date: ""
        };
    },

    componentDidMount: function(data) {
        $.get("/api/showcases/" + this.props.params.showcaseDate, function(result) {
            var showcases = []
            for (var i = 0; i < result.showcases.length; i++) {
                showcases.push(<Showcase showcase={result.showcases[i]} />);
            }
            this.setState(
                {
                    date: result.date,
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
                    <h2>{this.state.date}</h2>
                </Paper>
            <br/>
            {this.state.showcases}
            </div>
        </div>
        )
    }
});

module.exports = ShowcasesContent;
