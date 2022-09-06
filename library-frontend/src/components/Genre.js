import React from "react";

const Genre = ({ genre }) => {
  return (
    <li key={genre.id}>{genre.name}</li>
  )
}

export default Genre