import React, { useEffect, useState } from "react";
import Book from "./Book";
import BookAdd from "./BookAdd";
import { useDispatch, useSelector } from "react-redux";
import fetchBookList from "../redux/thunk/FetchBookList";
import { statusChange } from "../redux/books/actions";

const BookContainer = () => {
  const bookState = useSelector((state) => state.bookList);
  const bookStatus = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const handleStatusChange = (changeType) => {
    dispatch(statusChange(changeType));
  };

  useEffect(() => {
    dispatch(fetchBookList);
  }, [dispatch]);

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                className={`filter-btn ${
                  bookStatus == "all" && "active-filter"
                }`}
                id="lws-filterAll"
                onClick={() => handleStatusChange("all")}
              >
                All
              </button>
              <button
                className={`filter-btn ${
                  bookStatus == "featured" && "active-filter"
                }`}
                id="lws-filterFeatured"
                onClick={() => handleStatusChange("featured")}
              >
                Featured
              </button>
            </div>
          </div>
          <div className="lws-bookContainer">
            {/* Card 1 */}

            {bookState
              .filter((book) => {
                switch (bookStatus) {
                  case "all":
                    return true;

                  case "featured":
                    return book.featured;
                }
              })
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
        <div>
          <BookAdd />
        </div>
      </div>
    </main>
  );
};

export default BookContainer;
