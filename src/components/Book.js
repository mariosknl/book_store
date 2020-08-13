import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.tr`
  background: purple;
  color: yellow;
`;
const Book = ({ book: { title, category } }) => (
  <StyledRow>
    <td>
      {title}
    </td>
    <td>

      { category}
    </td>
  </StyledRow>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
