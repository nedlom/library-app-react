import React from "react";
import BooksContainer from '../../containers/BooksContainer'

const Genre = ({ genre, deleteGenre }) => {
 
  return (
    <li>
      {genre.name} 
      <button onClick={() => deleteGenre(genre.id)}>Delete</button>
      {genre.books ? <BooksContainer books={genre.books} /> : null}
    </li>
  )
}

export default Genre