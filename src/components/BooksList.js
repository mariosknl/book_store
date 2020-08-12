import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import actions from '../actions/index';
import selector from '../selectors/selectors';
import CategoryFilter from './CategoryFilter';

const StyledBooksList = styled.div`
  background: pink;
`;

export default function BooksList() {
  const { changeFilter, removeBook } = actions;
  const dispatch = useDispatch();
  const handleRemoveBook = id => {
    dispatch(removeBook(id));
  };
  const books = useSelector(selector);
  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(changeFilter(newFilter));
  };
  return (
    <>
      <CategoryFilter handleChange={handleFilterChange} />
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
    </>
  );
}
