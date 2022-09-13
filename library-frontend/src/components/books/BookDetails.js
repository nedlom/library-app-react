import React from "react";

const BookDetails  = props => {
  return (
    <div className="book-info">
     <b>
       {props.book.title} by {props.book.author}
     </b>
     <div>
       {props.book.description}
     </div>
      <button onClick={props.onClick}>Edit Book</button>
    </div>
  )


}

export default BookDetails 