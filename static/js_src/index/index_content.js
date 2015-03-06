var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;
    Nav = require('../nav.js');

var IndexContent = React.createClass({
    mixins: [Router.State],
    render: function(){
        return (
        <div className="mui-app-content-canvas page-with-nav">
            <div className="content">
                <form action="/artists">
                    <TextField hintText="artist name" name="artistName" />
                </form>
            </div>
        </div>
        )
    }
});

module.exports = IndexContent;

