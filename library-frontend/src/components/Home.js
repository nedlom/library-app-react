import React from "react";
import { connect } from 'react-redux'

const Home = props => {

  const randomBook = props.books[Math.floor(Math.random() * props.books.length)];
  
  if (randomBook) {
    return (
    <div className="grid-container-home">
      <div className="grid-home-item">
        <div className="spacer1"></div>
        <h3 className="center">
          Highlighted
          <br/>
          Book
        </h3>
      </div>
      <div className="grid-home-item">
        <div className="spacer2"></div>
        <div className="center">
        <b>{randomBook.title}</b>
        <div>by {randomBook.author}</div>
        </div>
        <hr/>
          <p>{randomBook.description}</p>
      </div>
    </div>
    )} else {
      return <div>Loading Book</div>
    }
}

const mapStateToProps = state => {
  return ({
    books: state.books
  })
}

export default connect(mapStateToProps)(Home)