import { addBook } from "../books/actions";
const bookAddServer = (book) => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        thumbnail: book.thumbnail,
        price: book.price,
        rating: book.rating,
        featured: book.featured,
      }),
      headers: { "content-type": "application/json; charset=UTF-8" },
    });

    const books = await response.json();
    console.log(getState);
    dispatch(addBook(books));
  };
};

export default bookAddServer;
