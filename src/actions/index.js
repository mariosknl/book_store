const addBook = (content = '') => ({ type: 'CREATE_BOOK', payload: content });

const removeBook = (content = '') => ({
  type: 'REMOVE_BOOK', payload: content,
});

export default { addBook, removeBook };
