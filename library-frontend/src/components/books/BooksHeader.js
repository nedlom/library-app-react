import React from "react";
import BookForm from "./BookForm";

const BooksHeader = ({ genre, addBook }) => {

  return (
    <div className="books-grid">
      <div className="books-grid-child first">
        <h4>{genre.name} <br /> Books</h4>
      </div>
      <div className="books-grid-child second">
        <BookForm genre_id={genre.id} addBook={addBook} submitValue="Add Book" />
      </div>
    </div>
  )

}

export default BooksHeader
