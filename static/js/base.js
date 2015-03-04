
(function () {
    React = require('react'),
    mui = require('material-ui');
    Nav = require('./nav.js');
    AppCanvas = mui.AppCanvas;
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();


    React.render(React.createElement(Nav, null), document.getElementById('nav'));
})();