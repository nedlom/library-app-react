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
      
      console.log(this.props)
      
      return (
        <div className="books-container">
          <div className="books-grid">
            <div className="books-grid-child first">
              <h4>{genre.name} <br /> Books</h4>
            </div>
            <div className="books-grid-child second">
            <BooksForm genre_id={genreId} addBook={this.props.addBook} />
            </div>
          </div>
          
          
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