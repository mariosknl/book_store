import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.tr`
  background: purple;
  color: yellow;
`;

export default function Book(props) {
  const { book, handleRemove } = props;
  const {
    id, title, category,
  } = book;
  return (
    <StyledRow>
      <td>
        {title}
      </td>
      <td>
        { category}
      </td>
      <td>
        <button type="submit" onClick={() => handleRemove(id)}>
          <i className="fas fa-trash-alt" />
        </button>
      </td>
    </StyledRow>
  );
}

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,

};
