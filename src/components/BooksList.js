import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import actions from '../actions/index';

const StyledBooksList = styled.table`
  background: pink;
`;

export default function BooksList() {
  const { removeBook } = actions;
  const dispatch = useDispatch();
  const handleRemoveBook = id => {
    dispatch(removeBook(id));
  };
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
          <Book book={book} key={book.id} handleRemove={handleRemoveBook} />
        ))}

      </tbody>
    </StyledBooksList>
  );
}
