const defaultState = { current: 'All', categories: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case ('CHANGE_FILTER'):
      return ({
        ...state,
        current: action.payload,
      });
    default:
      return state;
  }
};
