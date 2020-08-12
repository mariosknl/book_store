import { createSelector } from 'reselect';

const selectBooks = createSelector(
  state => state.books,
  state => state.filter,
  (books, filter) => {
    if (filter.current === 'All') return books;
    return books.filter(book => book.category === filter.current);
  },
);

export default selectBooks;
