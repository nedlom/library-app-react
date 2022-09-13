import React from "react";

const BookDetails  = props => {
  return (
    <div className="book-info">
      <b>
        {props.book.title} by {props.book.author}
      </b>
      <hr />
      <div>
        {props.book.description}
      </div>
    </div>
  )


}

export default BookDetails 