import React, { Component } from "react";
import { connect } from 'react-redux'

const Home = props => {
  
  // componentDidMount() {
  //   this.props.fetchGenres()
  //   this.props.fetchBooks()
  // }

  const randomBook = props.books[Math.floor(Math.random() * props.books.length)];
    if (randomBook) {
    
    return (
      <div id="home">
        <div style={{textAlign: "center"}}>
          <h4>Highlighted Book</h4>
          <b>{randomBook.title}</b>
          <div>by {randomBook.author}</div>
        </div>
        <br/>
        <p>
          {randomBook.description}
        </p>
      </div>
    )
    } else {
      return <div>waiting</div>
    }
  }


const mapStateToProps = state => {
  return ({
    books: state.books
  })
}

export default connect(mapStateToProps)(Home)