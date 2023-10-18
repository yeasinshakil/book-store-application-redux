import { bookLoad } from "../books/actions";

const fetchBookList = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();
  dispatch(bookLoad(books));
};

export default fetchBookList;
