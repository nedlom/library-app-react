import React from "react";
import { Link } from "react-router-dom";

const GenreLink = props => {
  return (
    <div className="genre-link">
      <Link className="link" to={`/genres/${props.genre.id}/${props.genre.name}`}>{props.genre.name}</Link>
    </div>
  )
}

export default GenreLink