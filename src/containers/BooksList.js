import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const StyledBooksList = styled.table`
  background: pink;
`;

export default function BooksList() {
  const books = useSelector(state => state.books);
  return (
    <StyledBooksList>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
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
