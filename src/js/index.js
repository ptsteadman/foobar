//  Index boilerplate that loads the bundle
require('file?name=[name].[ext]!../index.html');

// JavaScript Modules
import React from  'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'; // fetch polyfill for AJAX

import App from './App';

ReactDOM.render(<App />, document.getElementById("app"));
