import React from "react";
// import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

import Book from './Book'

const Books = props => {

  const books = props.books.filter(book => book.genre_id === parseInt(props.genre.id))
  
  return (
    <div className="books-container">
      <div className="book-section-title">{props.genre.name} Section</div>
      <div className="grid-container-books">
        {books.map(book => <Book key={book.id} book={book} deleteBook={props.deleteBook} />)}
      </div>
    </div>
  )

  }

export default Books