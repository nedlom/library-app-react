import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

import BooksContainer from '../../containers/BooksContainer'

// debugger
const Genre = props => {

  // console.log(props)
  const genre = props.genres.find(g => g.id === parseInt(props.match.params.id))
  // console.log(genre)
  // console.log(props.genre.books)
  return (
    
    // <div>hello</div>
    <BooksContainer genre={genre} />

      // <Link to={`genres/${props.genre.id}/books`}>{props.genre.name}</Link>
      // <BooksContainer books={props.genre.books} />
  
  ) 
}

const mapStateToProps = state => {
  return { genres: state.genres }
}

export default connect(mapStateToProps)(Genre)