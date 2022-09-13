import React from "react";

const BookButtons = props => {
  console.log(props)

  return (
    <div className="book-btns-grid">
      <button className="book-btn" onClick={props.buttonClick}>
        Edit
      </button>
      <button className="book-btn" onClick={() => props.deleteBook(props.book.id)}>
        Delete
      </button>
    </div>
  )
}

export default BookButtons