import React from "react";

const Genre = ({ genre, deleteGenre }) => {
 
  return (
    <li>
      {genre.name} 
      <button onClick={() => deleteGenre(genre.id)}>Delete</button>
    </li>
  )
}

export default Genre