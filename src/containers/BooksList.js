import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import actions from '../actions/index';
import selector from '../selectors/selectors';
import CategoryFilter from '../components/CategoryFilter';
import BookForm from './BooksForm';

const StyledBooksList = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: spece-between;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 4rem;
`;

const StyledHr = styled.hr`
  width: 100%;
  margin: 5rem;
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
        {books.map(book => (
          <Book book={book} key={book.id} handleRemove={handleRemoveBook} />
        ))}
        <StyledHr />
        <BookForm />
      </StyledBooksList>
    </>
  );
}
