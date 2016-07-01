import React from 'react';

function SearchForm(props) {
  return (
    <div>
      <input value={props.searchTerm} type="text" />
      <input type="submit" />
    </div>
  );
}

SearchForm.propTypes = {
  searchTerm: React.PropTypes.string.isRequired,
  handleInput: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default SearchForm;
