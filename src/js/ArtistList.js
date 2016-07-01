import React from 'react';
import Artist from './Artist';

function ArtistList(props) {
  return (
    <section className="artist-list">
      <div className="container">
      {
        props.artists.map(function(a, i) {
          if(i < 6) {
            return <Artist name={a.artistName} id={a.artistId} />;
          }
        })
      }
      </div>  
    </section>
  );
}

ArtistList.propTypes = {
  artists: React.PropTypes.array.isRequired,
};

export default ArtistList;
