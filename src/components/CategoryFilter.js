import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CategoryFilterSelect = styled.select`
  background: lightblue;
  color: white;
`;

export default function CategoryFilter(props) {
  let count = 0;

  const { handleChange } = props;
  const categories = useSelector(state => state.filter.categories);

  return (
    <CategoryFilterSelect onChange={handleChange}>
      <option value="All">All</option>
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
