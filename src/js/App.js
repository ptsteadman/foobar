import React from 'react';
import SearchForm from './SearchForm';
import ArtistList from './ArtistList';

const css = require('!style!css!sass!../sass/styles.scss');

const API_BASE = 'http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=';
const API_PARAMS = '&queryTrack=false&queryBundle=false&queryArtist=true&' +
  'queryStation=false&queryFeaturedStation=false&queryTalkShow=false&' +
  'queryTalkTheme=false&queryKeyword=false&countryCode=US';

const App = React.createClass({
  getInitialState: function () {
    return {
      searchTerm: '',
      artists: [],
      error: false,
    };
  },
  getArtists: function () {
    fetch(API_BASE + this.state.searchTerm + API_PARAMS , {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(function(response){
      if (response.status === 200) return response.json();
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }).then(function(data){
      self.setState({ artist: data });
    }).catch(function(error){
      console.log(error);
      self.setState({ error : true });
    });
  },
  onSearchInput: function () {
    console.log('input');
  },
  onSearchSubmit: function () {
    console.log('searching');
  },
  render: function () {
    return (
      <div className="container">
        <h1>iHeartRadio App</h1>
        <SearchForm
          handleInput={this.onSearchInput}
          handleSubmit={this.onSearchSubmit} 
        />
        <ArtistList artists={this.state.artists} />
      </div>
    );
  }
});

export default App;
