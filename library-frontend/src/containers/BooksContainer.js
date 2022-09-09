import React, { Component } from "react";
import { connect } from 'react-redux'
// import { withRouter } from "react-router-dom";

// import { fetchBooks } from '../actions/booksActions'
// import { fetchGenres } from '../actions/genresActions';
import { addBook, deleteBook } from "../actions/booksActions";

import Books from "../components/books/Books";
import BooksForm from "../components/books/BooksForm";

class BooksContainer extends Component {

  render() {
    
    // const genre = this.props.genre.find(genre => this.props.genreId === genre.id)
    // debugger

    // const genreId = "hello"
    // debugger
    // const genreIndex = parseInt(this.props.match.params.index)
    // const genre = this.props.genres[genreIndex]
    const genre = {
      id: this.props.match.params.id,
      name: this.props.match.params.name
    }

    return (
      
      <div>
        <BooksForm  genre_id={genre.id} addBook={this.props.addBook} />
        <Books genre={genre} books={this.props.books}  deleteBook={this.props.deleteBook} />
      </div>
    )
   
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps, { addBook, deleteBook })(BooksContainer)