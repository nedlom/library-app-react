import React from "react";

const Book = ({ book }) => {

  console.log(book)
 
  return (
    <div id="book">
      <b>
        {book.title}
      </b>
      <div>
        by {book.author}
      </div>
      <hr />
      <div>
        {book.description}
      </div>
    </div>
  )
}

export default Book