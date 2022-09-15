import React from "react";

import Book from './Book'

const Books = ({  books, getForm, deleteBook }) => {

  if (books.length === 0) {
    return (
      <div className="no-books">This Genre Currently Has No Books</div>
    )
  }
  
  return (
    <div>
      {books.map(book => <Book key={book.id} book={book} deleteBook={deleteBook} getForm={getForm} />)}
    </div>
  )
}

export default Books