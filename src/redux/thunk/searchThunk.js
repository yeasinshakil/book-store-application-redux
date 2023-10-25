import { search } from "../books/actions";

const searchTunk = (value) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books?q=${value}`);
    const book = await response.json();
    // console.log(book);
    dispatch(search(book));
  };
};

export default searchTunk;
