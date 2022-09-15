import React from "react";

const BookButtons = props => {

  return (
    <div className="book-btns-grid">
      <div>
        <button className="book-btn" onClick={props.buttonClick}>
          Edit
        </button>
      </div>
      <div>
        <button className="book-btn" onClick={() => props.deleteBook(props.book.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookButtons