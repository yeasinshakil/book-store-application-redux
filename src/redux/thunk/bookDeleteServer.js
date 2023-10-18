import { deleteBook } from "../books/actions";

const bookDeleteServer = (bookId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json; charset=UTF-8" },
    });
    dispatch(deleteBook(bookId));
  };
};

export default bookDeleteServer;
