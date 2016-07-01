import React from 'react';

function SearchForm(props) {
  return (
    <div>
      <input type="text" />
      <input type="submit" />
    </div>
  );
}

SearchForm.propTypes = {
  handleInput: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default SearchForm;
