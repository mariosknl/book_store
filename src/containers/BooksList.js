import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import actions from '../actions/index';

const StyledBooksList = styled.table`
  background: pink;
`;

function BooksList(props) {
  const { removeBook } = actions;
  const { dispatch, books } = props;
  const handleRemoveBook = id => {
    dispatch(removeBook(id));
  };

  return (
    <>
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
  books: state.books,
});

export default (connect(mapStateToProps))(BooksList);

BooksList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};
