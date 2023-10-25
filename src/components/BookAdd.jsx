import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookAddServer from "../redux/thunk/bookAddServer";
import bookUpdateServer from "../redux/thunk/bookUpdateServer";

const BookAdd = () => {
  const [bookData, setBookData] = useState({});
  const [selectBookInfo, SetSelectBookInfo] = useState({});
  const editBookDetails = useSelector((state) => state.editBook);
  const bookUpdate = useSelector((state) => state.update);
  // console.log(selectBookInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    SetSelectBookInfo(editBookDetails);
  }, [bookUpdate, editBookDetails]);

  const handleInputChange = (e) => {
    SetSelectBookInfo({
      ...selectBookInfo,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookUpdate) {
      dispatch(bookUpdateServer(selectBookInfo));
    } else {
      dispatch(bookAddServer(bookData));
      setBookData({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
      });
    }
  };
  // console.log(bookData);

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">
        {bookUpdate ? "Edit Book" : "Add New Book"}
      </h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={bookUpdate ? selectBookInfo.name : bookData.name}
            onChange={bookUpdate ? handleInputChange : handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={bookUpdate ? selectBookInfo.author : bookData.author}
            onChange={bookUpdate ? handleInputChange : handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={bookUpdate ? selectBookInfo.thumbnail : bookData.thumbnail}
            onChange={bookUpdate ? handleInputChange : handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={bookUpdate ? selectBookInfo.price : bookData.price}
              onChange={bookUpdate ? handleInputChange : handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={bookUpdate ? selectBookInfo.rating : bookData.rating}
              onChange={bookUpdate ? handleInputChange : handleChange}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={bookUpdate ? selectBookInfo.featured : bookData.featured}
            onChange={bookUpdate ? handleInputChange : handleChange}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {bookUpdate ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookAdd;
