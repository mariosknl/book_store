import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.tr`
  background: purple;
  color: yellow;
`;
export default function Book(props) {
  const { book } = props;
  const { id, title, category } = book;
  return (
    <StyledRow>
      <td>
        {title}
      </td>
      <td>

        { category}
      </td>
    </StyledRow>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,

};
