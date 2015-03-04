(function () {
    React = require('react'),
    mui = require('material-ui');
    VenuesContent = require('./venues/venues_content.js')
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

    React.render(React.createElement(VenuesContent, null), document.getElementById('content'));
})();