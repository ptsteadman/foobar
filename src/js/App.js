import React from 'react';
import Header from './Header';
import ArtistList from './ArtistList';

// css
var css = require('!style!css!sass!../sass/styles.scss');

const App = React.createClass({
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ArtistList />
      </div>
    );
  }
});

export default App;
