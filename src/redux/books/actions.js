import {
  BOOK_ADD,
  BOOK_DELETE,
  LOADED,
  EDIT_BOOK,
  STATUS_CHANGE,
  SEARCH,
} from "./actionType";

const bookLoad = (bookList) => {
  return {
    type: LOADED,
    payload: bookList,
  };
};

const addBook = (book) => {
  return {
    type: BOOK_ADD,
    payload: book,
  };
};

const editBook = (bookInfo) => {
  return {
    type: EDIT_BOOK,
    payload: bookInfo,
  };
};
const statusChange = (changeType) => {
  return {
    type: STATUS_CHANGE,
    payload: changeType,
  };
};
const search = (bookInfo) => {
  return {
    type: SEARCH,
    payload: bookInfo,
  };
};

const deleteBook = (id) => {
  return {
    type: BOOK_DELETE,
    payload: id,
  };
};

export { addBook, deleteBook, bookLoad, editBook, statusChange, search };
