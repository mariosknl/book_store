export default (state = {}, action) => {
  switch (action.type) {
    case ('CREATE_BOOK'):
      return ([...state, action.payload]);
    case ('REMOVE_BOOK'):
      return { ...state, books: state.filter(book => book.id !== action.payload.id) };
    default:
      return state;
  }
};
