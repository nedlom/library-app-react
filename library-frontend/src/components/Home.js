import React from "react";
import { connect } from 'react-redux'

const Home = props => {

  console.log("Home")
  const randomBook = props.books[Math.floor(Math.random() * props.books.length)];

  if (randomBook) {
    return (
    
      <div className="home-grid">
        
        <div className="home-grid-child first">
          <h3>Highlighted<br/>Book</h3>
        </div>

        <div className="home-grid-child second">
          <b>{randomBook.title}</b>
          <br />
          by {randomBook.author}
          <hr />
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