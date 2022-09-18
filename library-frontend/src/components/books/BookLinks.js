import React from "react";
import { Link } from "react-router-dom";

const BookLinks = ({ books, handleCheck, deleteBook }) => {

  // debugger
  const links = books.map(book => {
    return (
      <li key={book.id} className="book-link-div">

        {/* <input 
          type="checkbox" 
          onChange={() => handleCheck(book.id)}>
        </input> */}

        <Link to={`/books/${book.id}`}>
          {book.title}
        </Link>

        <button className="book-delete-button" onClick={() => deleteBook(book.id) }>delete</button>

      </li>
    )
  })

  return <ul>{links}</ul>
}

export default BookLinks