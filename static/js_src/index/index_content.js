var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;
    Nav = require('../nav.js');

var IndexContent = React.createClass({
    render: function(){
        return (
        <div>
            <Nav/>
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

