import React from "react";

const Books = props => {
  
  const mapping = props.books.map(book => <li key={book.id}>{book.title} by {book.author}</li>)

  return (
    <div>{mapping}</div>
  )
}

export default Books