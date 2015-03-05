var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;

var IndexContent = React.createClass({
    render: function(){
        return (
        <div>
            <form action="/artists">
                <TextField hintText="artist name" name="artistName" />
            </form>
        </div>
        )
    }
});

module.exports = IndexContent;

