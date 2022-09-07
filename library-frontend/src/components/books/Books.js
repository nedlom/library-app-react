import React from "react";

const Books = props => {
  
  console.log(props.books)
  const books = props.books.map(b => <li>{b.title}</li>)
  console.log(books)
  // const mapping = props.books.map(book => <li key={book.id}>{book.title} by {book.author}</li>)
  return <ul>{books}</ul>
}

export default Books