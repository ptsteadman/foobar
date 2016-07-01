import React from 'react';

function Artist(props) {
  return (
    <div className="artist">
      <div className="container">
        <img src="" className="artist__image" />
        <h3 className="artist__name">Artist Name</h3>
        <p className="artist__description">Artist description</p>
      </div>
    </div> 
  );
}

Artist.propTypes = {

};

export default Artist;
