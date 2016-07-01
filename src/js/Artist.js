import React from 'react';

function Artist(props) {
  var imgPath = 'http://iscale.iheart.com/catalog/artist/' + props.id + '?ops=fit(250,0)';
  return (
    <div className="artist col-sm-4 col-xs-6">
      <div className="artist__inner">
        <img src={imgPath} className="artist__image" />
        <h4 className="artist__name">{props.name}</h4>
        <p className="artist__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut faucibus euismod nunc ut tincidunt.
        </p>
      </div>
    </div> 
  );
}

Artist.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
};

export default Artist;
