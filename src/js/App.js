import React from 'react';
import Header from './Header';
import ArtistList from './ArtistList';
import SearchForm from './SearchForm';

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
<<<<<<< HEAD
      <div className="wrapper">
        <Header />
        <ArtistList />
=======
      <div className="container">
        <h1>iHeartRadio App</h1>
        <SearchForm
          handleInput={this.onSearchInput}
          handleSubmit={this.onSearchSubmit} 
        />
>>>>>>> 1ceb815fe23c3a3d78024546687269829708f271
      </div>
    );
  }
});

export default App;
