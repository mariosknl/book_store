export default (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case ('GET_DATA_BOOK'):
      return ([...state, action.payload]);
    case ('FETCH_BOOKS'):
      return ({ books: action.payload });
    default:
      return state;
  }
};
