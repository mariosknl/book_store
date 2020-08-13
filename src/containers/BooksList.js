import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import actions from '../actions/index';
import selector from '../selectors/selectors';
import CategoryFilter from '../components/CategoryFilter';

const StyledBooksList = styled.table`
  background: pink;
`;

function BooksList(props) {
  const { changeFilter, removeBook } = actions;
  const { dispatch, books } = props;
  const handleRemoveBook = id => {
    dispatch(removeBook(id));
  };

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

const mapStateToProps = state => ({
  books: selector(state.books, state.filter),
});

export default (connect(mapStateToProps))(BooksList);

BooksList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};
