import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import BooksContainer from "../../containers/BooksContainer";
import Home from "../Home";
import Test from "./test";

const Genre = props => {


  console.log(props)
  const goHere = () => {
    
    return <BooksContainer />
    // console.log("hello")
  }

  return (
    <div className="grid-item">

      <Link to={`/genres/${props.genre.id}`}>{props.genre.name}</Link>
      
      
        <Route path="genres/:id" render={Test} />
      
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
