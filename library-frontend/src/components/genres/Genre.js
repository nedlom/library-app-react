import React from "react";

import GenreDelete from "./GenreDelete";
import GenreLink from "./GenreLink";

const Genre = props => {
  return (
    <div className="grid-item">
      <GenreLink index={props.index} genre={props.genre} />
      <GenreDelete genre={props.genre} deleteGenre={props.deleteGenre} />
    </div>
  ) 
}

export default Genre

