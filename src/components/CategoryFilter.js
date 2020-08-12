import React from 'react';
import styled from 'styled-components';

const CategoryFilterSelect = styled.select`
  background: lightblue;
  color: white;
`;

export default function CategoryFilter() {
  return (
    <CategoryFilterSelect>
      <option>Horror</option>
    </CategoryFilterSelect>
  );
}
