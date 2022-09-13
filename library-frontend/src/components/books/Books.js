import React from "react";

import Book from './Book'

const Books = ({ books, deleteBook }) => {

  return (
    <div>
      {books.map(book => <Book key={book.id} book={book} deleteBook={deleteBook} />)}
    </div>
  )
}

export default Books