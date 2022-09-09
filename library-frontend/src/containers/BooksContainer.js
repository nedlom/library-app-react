import React, { Component } from "react";
import { connect } from 'react-redux'
// import { withRouter } from "react-router-dom";

import { fetchBooks } from '../actions/booksActions'
import { fetchGenres } from '../actions/genresActions';
import { addBook, deleteBook } from "../actions/booksActions";

import Books from "../components/books/Books";
import BooksForm from "../components/books/BooksForm";

class BooksContainer extends Component {

  render() {
    
    const genreIndex = parseInt(this.props.match.params.index)
    const genre = this.props.genres[genreIndex]
    console.log("gothere")

    return (
      
      <div>
        <BooksForm genre={genre} addBook={this.props.addBook}/>
        <Books genre={genre} deleteBook={this.props.deleteBook} />
      </div>
    )
   
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    genres: state.genres
  }
}


export default connect(mapStateToProps, { fetchBooks, fetchGenres, addBook, deleteBook })(BooksContainer)