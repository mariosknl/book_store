const fetchDataBook = () => async (dispatch, getState) => {
  const { currentBook: { id } } = getState();
  try {
    const res = await fetch(`http://localhost:3000/books/${id}`);
    const data = await res.json();
    dispatch({
      type: 'FETCH_DATA', payload: data,
    });
  } catch (e) {
    dispatch({
      type: 'API_CURRENT_BOOK_STORE', payload: { error: e },
    });
  }
};

export default fetchDataBook;

export const fetchDataBooks = () => async dispatch => {
  try {
    const res = await fetch('http://localhost:3000/books');
    const data = await res.json();
    dispatch({
      type: 'FETCH_BOOKS', payload: data,
    });
  } catch (e) {
  }
};
