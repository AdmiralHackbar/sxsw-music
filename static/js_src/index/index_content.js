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
                <h2>Browse showcases</h2>
                <a href="/#/showcases/2015-03-17"><h3>Tuesday</h3></a>
                <a href="/#/showcases/2015-03-18"><h3>Wednesday</h3></a>
                <a href="/#/showcases/2015-03-19"><h3>Thursday</h3></a>
                <a href="/#/showcases/2015-03-20"><h3>Friday</h3></a>
                <a href="/#/showcases/2015-03-21"><h3>Saturday</h3></a>
                <a href="/#/showcases/2015-03-17"><h3>Sunday</h3></a>
            </div>
        </div>
        )
    }
});

module.exports = IndexContent;

