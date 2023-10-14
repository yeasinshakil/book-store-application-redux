const addBook = (product) => {
  return {
    type: BOOK_ADD,
    payload: product,
  };
};
const deleteBook = (id) => {
  return {
    type: BOOK_DELETE,
    payload: id,
  };
};
