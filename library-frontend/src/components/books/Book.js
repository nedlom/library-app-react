import React from "react";

const Book = props => {

  console.log(props)
 
  return (
    <div>
      <div className="book-card">
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
        <div className="delete-div">
        <button className="delete-btn" onClick={() => props.deleteBook(props.book.id)}>Delete</button>
      </div>
      </div>
      
    </div>
    
  )
}

export default Book