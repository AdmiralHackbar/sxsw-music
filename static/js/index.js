(function () {
    React = require('react'),
    mui = require('material-ui');
    IndexContent = require('./index/index_content.js')
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

    React.render(React.createElement(IndexContent, null), document.getElementById('content'));
})();