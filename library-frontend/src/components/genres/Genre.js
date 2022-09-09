import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { deleteGenre } from "../../actions/genresActions";

const Genre = props => {

  console.log(props)
  return (
    <div className="grid-item">
      <div className="genre-link">
        <Link  to={`/genres/${props.indexOf}`}>{props.genre.name}</Link>
      </div>
      <div className="delete-div">
        <button className="delete-btn" onClick={() => props.deleteGenre(props.genre.id)}>Delete</button>
      </div>
    </div>
  ) 
}

export default connect(null, { deleteGenre })(Genre)

