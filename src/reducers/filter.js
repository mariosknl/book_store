export default (state = {}, action) => {
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
