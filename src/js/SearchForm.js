import React from 'react';

function SearchForm(props) {
  return (
    <section className="search-form">
      <div className="col-md-4 col-md-offset-4">
        <form onSubmit={props.handleSubmit}>
          <input 
            type="text" 
            className="search-form__input"
            placeholder="Enter Artist Name"
            value={props.searchTerm} 
            onChange={props.handleInput}
          />
          <input 
            className="search-form__submit"
            value="Go"
            type="submit" 
          />
        </form>
      </div>
    </section>
  );
}

SearchForm.propTypes = {
  searchTerm: React.PropTypes.string.isRequired,
  handleInput: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default SearchForm;
