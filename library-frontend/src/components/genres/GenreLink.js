import React from "react";
import { Link } from "react-router-dom";

const GenreLink = props => {

  console.log("GenreLink", props.genre)
  return (
    <Link className="genre-link" to={`/genres/${props.genre.id}`}>
      {props.genre.name}
    </Link>
  )
}

export default GenreLink