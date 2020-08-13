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
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  margin-bottom: 3rem;
`;

export default function Book(props) {
  const { book, handleRemove } = props;

  const {
    title, category, id,
  } = book;
  return (
    <StyledBookCard>
      <StyledRowLeft title={title} id={id} category={category} handleRemove={handleRemove} />
      <StyledRowCenter />
      <StyledRowRight />
    </StyledBookCard>
  );
}

Book.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
