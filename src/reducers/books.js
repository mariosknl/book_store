export default (state = {}, action) => {
  const { books } = state;
  switch (action.type) {
    case ('CREATE_BOOK'):
      books.concat(action.payload);
      return ({ ...state, books });
    case ('REMOVE_BOOK'):
      return { ...state, books: books.filter(book => book.id !== action.payload) };
    default:
      return state;
  }
};
