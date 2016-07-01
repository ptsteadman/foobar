import React from 'react';
import Header from './Header';
import ArtistList from './ArtistList';
import SearchForm from './SearchForm';
import Error from './Error';

const css = require('!style!css!sass!../sass/styles.scss');

const API_BASE = 'http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=';
const API_PARAMS = '&queryTrack=false&queryBundle=false&queryArtist=true&' +
                   'queryStation=false&queryFeaturedStation=false&queryTalkShow=false&' +
                   'queryTalkTheme=false&queryKeyword=false&countryCode=US';

const App = React.createClass({
  getInitialState() {
    return {
      searchTerm: '',
      artists: [],
      error: false,
    };
  },
  getArtists() {
    fetch(API_BASE + encodeURI(this.state.searchTerm) + API_PARAMS, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) return response.json();
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }).then((data) => {
      this.setState({ 
        artists: data.artists,
        error: false,
      });
    }).catch((error) => {
      console.log(error);
      this.setState({ error : true });
    });
  },
  onSearchInput(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  },
  onSearchSubmit(e) {
    e.preventDefault();
    this.getArtists();
  },
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SearchForm
          searchTerm={this.state.searchTerm}
          handleInput={this.onSearchInput}
          handleSubmit={this.onSearchSubmit} 
        />
        {
          this.state.error 
            ? <Error />
            : <ArtistList artists={this.state.artists} />
        }
      </div>
    );
  }
});

export default App;
