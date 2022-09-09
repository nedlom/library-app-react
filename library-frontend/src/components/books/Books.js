import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Book from './Book'


const Books = props => {

  const params = useParams()
  const index = parseInt(params.indexOf)
  const genre = props.genres[index]

  
  if (genre) {
    return (
      <div>
        <div>{genre.name}</div>
        {genre.books.map(b => <Book book={b} />)}
      </div>
    ) }else {
      return (
        <div>loading</div>
      )
    }
  }
  // return (
  //   <div>
  //     hello

      // {genre.name} 
      // {genre.books.map(b => <div>{b.title}</div>)} 


  //   </div>
  // )
  // const bookList = books.map(book => {
  //   return (
  //     <Book book={book} />
  //   )
  // })

  // console.log(books === [])

  

  // if (bookList.length === 0) {
  //   return (
  //     <div>
  //       <h3 className="section-name">{name}</h3>
  //       <div className="empty">{name} genre is empty.</div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <div>
  //         <h3 className="section-name">{name}</h3>
  //       </div>
  //       <div className="grid-container">
  //         {bookList}
  //       </div>
  //     </div>
  //   )
  // }


const mapStateToProps = state => {
  return ({
    genres: state.genres
  })
}


export default connect(mapStateToProps)(Books)