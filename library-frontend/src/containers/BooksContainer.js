import React, { Component } from "react";
import { connect } from 'react-redux'
import { addBook, updateBook, deleteBook } from "../actions/booksActions";
import BookAlphabetize from "../components/books/BooksAlphabetize";
import BooksHeader from "../components/books/BooksHeader";

class BooksContainer extends Component {
  constructor(props) {
    super(props)
    this.genre = props.genres.find(genre => {
      return genre.id === parseInt(props.match.params.id)
    })
    this.books = props.books.filter(book => {
      return book.genre_id === this.genre.id
    })
  }

  render() {
    const genreBooks = this.props.books.filter(b => b.genre_id === this.genre.id)
    
    return (
      <div className="books-container">
        <BooksHeader genre={this.genre} addBook={this.props.addBook} />
        <BookAlphabetize books={genreBooks} deleteBook={this.props.deleteBook} />
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

const mapDispatchToProps = dispatch => {
  return {
    addBook: body => dispatch(addBook(body)),
    updateBook: (id, body) => dispatch(updateBook(id, body)),
    deleteBook: id => dispatch(deleteBook(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)