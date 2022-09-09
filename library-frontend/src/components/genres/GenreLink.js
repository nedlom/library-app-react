import React from "react";
import { Link } from "react-router-dom";

const GenreLink = props => {
  return (
    <div className="genre-link">
      <Link  to={`/genres/${props.index}`}>{props.genre.name}</Link>
    </div>
  )
}

export default GenreLink