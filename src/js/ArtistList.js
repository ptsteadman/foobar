import React from 'react';
import Artist from './Artist';

function ArtistList(props) {
  return (
    <section className="artist-list">
      <div className="container">
        <Artist />
      </div>  
    </section>
  );
}

ArtistList.propTypes = {

};

export default ArtistList;
