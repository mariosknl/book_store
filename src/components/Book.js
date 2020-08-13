import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledRowCenter from './layout/StyledRowCenter';
import StyledRowRight from './layout/StyledRowRight';
import StyledRowLeft from './layout/StyledRowLeft';

const StyledBookCard = styled.div`
  background: white;
  width: 100%;
  display: flex;
  border: 2px solid black;
`;

export default function Book(props) {
  const { book, handleRemove } = props;
  const {
    title, category,
  } = book;
  return (
    <StyledBookCard>
      <StyledRowLeft title={title} category={category} handleRemove={handleRemove} />
      <StyledRowCenter />
      <StyledRowRight />
    </StyledBookCard>
  );
}

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  handleRemove: PropTypes.func.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
