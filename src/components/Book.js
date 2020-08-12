import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledRowCenter from './layout/StyledRowCenter';
import styledRowRight from './layout/StyledRowRight';
import StyledRowLeft from './layout/StyledRowLeft';

const StyledBookCard = styled.div`
  background: white;
  width: 85%;
  display: flex;
  border: 2px solid black;
`;

export default function Book(props) {
  const { book, handleRemove } = props;
  const {
    id, title, category,
  } = book;
  return (
    <StyledBookCard>

      <StyledRowLeft title={title} category={category} handleRemove={handleRemove} />
      <StyledRowCenter />
    </StyledBookCard>
  );
}

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,

};
