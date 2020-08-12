import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Book from './Book';

const StyledBooksList = styled.table`
  background: black;
`;

export default function BooksList() {
  const books = useSelector(state => state.books);
  console.log(books);
  return (
    <StyledBooksList>
      <thead>
        <tr>
          <th colSpan="2">The table header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Book />
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
      </tbody>
    </StyledBooksList>
  );
}
