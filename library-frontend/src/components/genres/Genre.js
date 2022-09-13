import React from "react";

import GenreDelete from "./GenreDelete";
import GenreLink from "./GenreLink";

const Genre = props => {
  
  return (
    <div className="genre-grid-item">
      <GenreLink className="genre-grid-item" index={props.index} genre={props.genre} />
      <GenreDelete genre={props.genre} deleteGenre={props.deleteGenre} /> 
    </div>
  ) 
}

export default Genre

