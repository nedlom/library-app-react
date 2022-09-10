import React from "react";
// import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

import Book from './Book'

const Books = props => {

  const books = props.books.filter(book => book.genre_id === parseInt(props.genre.id))
  
  return (
    <div>
      {books.map(book => <Book key={book.id} book={book} deleteBook={props.deleteBook} />)}
    </div>
  )

  }

export default Books