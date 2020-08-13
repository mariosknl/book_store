import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import actions from '../actions/index';
import selector from '../selectors/selectors';

const StyledBooksList = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

`;

function BooksList(props) {
  const { removeBook } = actions;
  const { dispatch, books } = props;
  const handleRemoveBook = id => {
    dispatch(removeBook(id));
  };

  return (

    <StyledBooksList>
      {books.map(book => (
        <Book book={book} key={book.id} handleRemove={handleRemoveBook} />
      ))}

    </StyledBooksList>
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
