import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

let $ = require('jquery');
window.jQuery = $;
window.$ = $;

require('uikit/dist/js/uikit.min.js');
require('uikit/dist/js/components/tooltip.js');

require('./styles.scss');

ReactDOM.render(<App />, document.getElementById("app"));
