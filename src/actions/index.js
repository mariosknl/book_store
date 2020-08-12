const addBook = (content = '') => ({ type: 'CREATE_BOOK', payload: content });

export default addBook;
