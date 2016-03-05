var React = require('react');
Link = require('react-router').Link;

var IndexContent = React.createClass({
    mixins: [Router.State],
    render: function(){
        return (
        <div className="mui-app-content-canvas page-with-nav">
            <div className="content">
                <h2>Browse showcases</h2>
                <Link to="/showcases/2016-03-17"><h3>Tuesday</h3></Link>
                <Link to="/showcases/2015-03-18"><h3>Wednesday</h3></Link>
                <Link to="/showcases/2015-03-17"><h3>Tuesday</h3></Link>
                <Link to="/showcases/2015-03-18"><h3>Wednesday</h3></Link>
            </div>
        </div>
        )
    }
});

module.exports = IndexContent;

