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
    const self = this;
    fetch(API_BASE + encodeURI(this.state.searchTerm) + API_PARAMS, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(function(response){
      if (response.status === 200) return response.json();
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }).then(function(data){
      self.setState({ artists: data.artists });
    }).catch(function(error){
      console.log(error);
      self.setState({ error : true });
    });
  },
  onSearchInput: function (e) {
    this.setState({
      searchTerm: e.target.value,
    });
  },
  onSearchSubmit: function (e) {
    e.preventDefault();
    this.getArtists();
  },
  render: function () {
    return (
      <div className="wrapper">
        <Header />
        <SearchForm
          searchTerm={this.state.searchTerm}
          handleInput={this.onSearchInput}
          handleSubmit={this.onSearchSubmit} 
        />
        <ArtistList artists={this.state.artists} />
      </div>
    );
  }
});

export default App;
