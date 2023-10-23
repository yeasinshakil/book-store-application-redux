import { bookLoad } from "../books/actions";

const bookUpdateServer = (bookInfo) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookInfo.id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...bookInfo }),
      headers: { "content-type": "application/json; charset=UTF-8" },
    });
    const fetchAllbook = await fetch("http://localhost:9000/books/");
    const books = await fetchAllbook.json();
    dispatch(bookLoad(books));
  };
};

export default bookUpdateServer;
