import React from "react";

const BookDetails  = props => {
  return (
    <div className="book-info">
      <b>
        {props.book.title}
      </b>

      <div>
        by {props.book.author}
      </div>

      <hr />

      <div>
        {props.book.description}
      </div>
      
    </div>
  )
}

export default BookDetails 