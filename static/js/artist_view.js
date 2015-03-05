(function () {
    React = require('react'),
    mui = require('material-ui');
    ArtistViewContent = require('./artist_view/artist_view_content.js')
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

    React.render(React.createElement(ArtistViewContent, null), document.getElementById('content'));
})();