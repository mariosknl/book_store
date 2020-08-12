import React from 'react';
import PropTypes from 'prop-types';
import styledRowCenter from './layout/StyledRowCenter';
import styledRowRight from './layout/StyledRowRight';
import StyledRowLeft from './layout/StyledRowLeft';

export default function Book(props) {
  const { book, handleRemove } = props;
  const {
    id, title, category,
  } = book;
  return (
    <StyledRowLeft>
      <h5>
        { category}
      </h5>
      <h2>
        {title}
      </h2>
      <span>Author</span>
      <button type="submit" onClick={() => handleRemove(id)}>
        <i className="fas fa-trash-alt" />
      </button>
    </StyledRowLeft>
  );
}

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,

};
