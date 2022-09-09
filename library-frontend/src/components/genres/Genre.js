import React from "react";
import { Link } from "react-router-dom";



const Genre = props => {

  console.log(props)
  return (
    <div className="grid-item">

      <Link to={`/genres/${props.indexOf}`}>{props.genre.name}</Link>
      
      
      {/* <b className="genre-name">{props.genre.name}</b>
      <div>
        <button className="genre-button">Booklist</button>
        <span className="spacer"></span>
        <button className="genre-button">Delete</button>
      </div> */}
    </div>

    
    
    // <Link to={`/genres/${props.genre.id}`}>{props.genre.name}</Link>
    // <button onClick={goHere}>{props.genre.name}</button>
  ) 
}

export default Genre
