import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Book from './Book';

const StyledBooksList = styled.table`
  background: black;
`;

export default function BooksList() {
  const books = useSelector(state => state.books);
  return (
    <StyledBooksList>
      <thead>
        <tr>
          <th colSpan="2">The table header</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}

      </tbody>
    </StyledBooksList>
  );
}
