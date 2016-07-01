import React from 'react';

function Artist(props) {
  return (
    <div className="artist">
      <div className="container">
        <img src="" className="artist__image" />
        <h3 className="artist__name">{props.name}</h3>
        <p className="artist__description">Artist description</p>
      </div>
    </div> 
  );
}

Artist.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
};

export default Artist;
