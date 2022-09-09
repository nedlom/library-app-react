import React from "react";

const GenreDelete = props => {
  return (
    <div className="delete-div">
      <button className="delete-btn" onClick={() => props.deleteGenre(props.genre.id)}>Delete</button>
    </div>
  )
}

export default GenreDelete