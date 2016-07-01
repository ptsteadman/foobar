import React from 'react';

function SearchForm(props) {
  return (
    <section className="search-form">
      <div className="col-md-6 col-md-offset-3">
        <input type="text" className="search-form__input"/>
        <input type="submit" />
      </div>
    </section>
  );
}

SearchForm.propTypes = {
  handleInput: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default SearchForm;
