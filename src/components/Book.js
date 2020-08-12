import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
  color: yellow;
  width: 100%;
  height: 170px;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Book(props) {
  const { book, handleRemove } = props;
  const {
    id, title, category,
  } = book;
  return (
    <StyledRow>
      <h5>
        { category}
      </h5>
      <h2>
        {title}
      </h2>
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
