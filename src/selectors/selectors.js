const selectBooks = (books, filter) => {
  if (filter.current === 'All') return books;
  return books.filter(book => book.category === filter.current);
};

export default selectBooks;
