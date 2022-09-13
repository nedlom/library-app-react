import React, { Component } from "react";
import { connect } from 'react-redux'

import { fetchBooks, addBook, deleteBook } from "../actions/booksActions";

import Books from "../components/books/Books";
import BooksForm from "../components/books/BooksForm";

class BooksContainer extends Component {

  render() {
    if (this.props.books.length === 0){
      return (
        <div>Loading Books</div>
      )
    } else {
      
      const genreId = this.props.match.params.id
      const genre = this.props.genres.find(g => g.id === parseInt(genreId))
      const genreBooks = this.props.books.filter(b => b.genre_id === parseInt(genreId))
      
      
      return (
        <div className="books-container">
          {/* <h4>{genre.name}</h4> */}
          <BooksForm genre_id={genreId} addBook={this.props.addBook} />
          <Books books={genreBooks}  deleteBook={this.props.deleteBook} />
          <div className="add-space"></div>
        </div>
      )
    }
   
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    genres: state.genres
  }
}

export default connect(mapStateToProps, { fetchBooks, addBook, deleteBook })(BooksContainer)