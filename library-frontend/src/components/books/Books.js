import React from "react";
// import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Book from './Book'

const Books = props => {

  // console.log(props)

  // const params = useParams()
  // const index = parseInt(params.indexOf)
  // const genre = props.genres[index]

  
  if (props.genre) {
    return (
      <div>
        <div>{props.genre.name} Section</div>
        {props.genre.books.map(book => <Book key={book.id} book={book} deleteBook={props.deleteBook}/>)}
      </div>
    ) 
  } else {
      return (
        <div>loading</div>
      )
    }
  }

export default Books