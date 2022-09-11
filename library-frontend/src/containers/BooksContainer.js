import React, { Component } from "react";
import { connect } from 'react-redux'

import { fetchBooks, addBook, deleteBook } from "../actions/booksActions";

import Books from "../components/books/Books";
import BooksForm from "../components/books/BooksForm";

class BooksContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchBooks()
  // }

  render() {
    
    const genre = {
      id: this.props.match.params.id,
      name: this.props.match.params.name
    }

    return (
      
      <div className="books-container">
        <h4>{genre.name}</h4>
        <BooksForm genre_id={genre.id} addBook={this.props.addBook} />
        <Books genre={genre} books={this.props.books}  deleteBook={this.props.deleteBook} />
        <div className="add-space"></div>
      </div>
    )
   
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps, { fetchBooks, addBook, deleteBook })(BooksContainer)