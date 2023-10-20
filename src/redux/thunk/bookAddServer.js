import { addBook } from "../books/actions";
const bookAddServer = (book) => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: { "content-type": "application/json; charset=UTF-8" },
    });

    const books = await response.json();
    // console.log(books);
    dispatch(addBook(books));
  };
};

export default bookAddServer;
