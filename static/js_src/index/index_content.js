var React = require('react'),
    mui = require('material-ui');
    TextField = mui.TextField;
    IconButton = mui.IconButton;

var pageContent;
    if (window.results.length == 0) {
        pageContent = <div>Nothing</div>
    } else {
        pageContent = <div>Stuff</div>
    }

var IndexContent = React.createClass({
    render: function(){
        return (
        <div>
            <form>
                <TextField hintText="artist name" name="artistName" />
            </form>
            <div>
                {pageContent}
            </div>
        </div>
        )
    }
});

module.exports = IndexContent;

