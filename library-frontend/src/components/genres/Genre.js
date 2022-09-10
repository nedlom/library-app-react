import React from "react";

import GenreDelete from "./GenreDelete";
import GenreLink from "./GenreLink";

const Genre = props => {
  return (
    <div className="genre-grid-item">
      <GenreLink index={props.index} genre={props.genre} genreId={props.genre.id} />
      <GenreDelete genre={props.genre} deleteGenre={props.deleteGenre} />
    </div>
  ) 
}

export default Genre

