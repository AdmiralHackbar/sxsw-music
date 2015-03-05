(function () {
    React = require('react'),
    mui = require('material-ui');
    ArtistsContent = require('./artists/artists_content.js')
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

    React.render(<ArtistsContent />, document.getElementById('content'));
})();