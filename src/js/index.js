//  Index boilerplate that loads the bundle
require('file?name=[name].[ext]!../index.html');

// JavaScript Modules
import React from  'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById("app"));
