import React from "react";

const Book = props => {

  console.log(props)
 
  return (
    <div className="book-card">

      <div className="book-info">
        <b>
          {props.book.title} by {props.book.author}
        </b>
        <div>
          {props.book.description}
        </div>
      </div>

      
        <button className="delete-book-btn" onClick={() => props.deleteBook(props.book.id)}>Delete</button>
    
    
  </div>
    
  )
}

export default Book