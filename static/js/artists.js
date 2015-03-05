(function () {
    React = require('react'),
    mui = require('material-ui');
    ArtistsContent = require('./artists/artists_content.js')
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

    React.render(React.createElement(ArtistsContent, null), document.getElementById('content'));
})();