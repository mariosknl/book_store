import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CategoryFilterSelect = styled.select`
background: transparent;
color: #c7c8cc;
border: none;
outline: none;
`;

export default function CategoryFilter(props) {
  let count = 0;

  const { handleChange } = props;
  const categories = useSelector(state => state.filter.categories);

  return (
    <CategoryFilterSelect onChange={handleChange}>
      <option value="All">Category</option>
      {categories.map(category => {
        count += 1;
        return <option value={category} key={count}>{category}</option>;
      })}
      <option>Horror</option>
    </CategoryFilterSelect>
  );
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
