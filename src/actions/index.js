const addBook = (content = '') => ({ type: 'CREATE_BOOK', payload: content });

const removeBook = (content = '') => ({
  type: 'REMOVE_BOOK', payload: content,
});

const changeFilter = (content = '') => ({
  type: 'CHANGE_FILTER',
  payload: content,
});

export default { addBook, removeBook, changeFilter };
