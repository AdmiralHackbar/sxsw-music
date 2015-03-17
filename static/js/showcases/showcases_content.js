var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;
    Paper = mui.Paper;
    Showcase = require('./showcase.js');


var ShowcasesContent = React.createClass({displayName: "ShowcasesContent",
    mixins: [Router.State],
    getInitialState: function() {
        return {
          showcases: [],
            date: ""
        };
    },

    componentDidMount: function(data) {
        $.get("/api/showcases/" + this.getParams().showcaseDate, function(result) {
            var showcases = []
            for (var i = 0; i < result.showcases.length; i++) {
                showcases.push(React.createElement(Showcase, {showcase: result.showcases[i]}));
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
        React.createElement("div", {className: "mui-app-content-canvas page-with-nav"}, 
            React.createElement("div", {className: "content"}, 
                React.createElement(Paper, {innerClassName: "venue-header-paper"}, 
                    React.createElement("h2", null, this.state.date)
                ), 
            React.createElement("br", null), 
            this.state.showcases
            )
        )
        )
    }
});

module.exports = ShowcasesContent;
