import React, { Component } from "react";
import { connect } from 'react-redux'

import { addBook, deleteBook } from "../actions/booksActions";

import Books from "../components/books/Books";
import BooksForm from "../components/books/BooksForm";

class BooksContainer extends Component {

  render() {
    
    const genre = {
      id: this.props.match.params.id,
      name: this.props.match.params.name
    }

    return (
      
      <div className="book-container">
        <BooksForm genre_id={genre.id} addBook={this.props.addBook} />
        
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