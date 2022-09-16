import React, { Component } from "react";
import { connect } from 'react-redux'


import { addBook, updateBook, deleteBook } from "../actions/booksActions";

import Books from "../components/books/Books";
// import BooksForm from "../components/books/BooksForm";
import BookForm from "../components/books/BookForm";
// import HeaderB from "../components/books/Header";
// import Header from "../components/Header";


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

  // getForm = formState => {
  //   if (formState.id === "") {
  //     delete formState.id
  //     debugger
  //     formState.genre_id = this.genre.id
  //     this.props.addBook(formState)
  //   } else {
  //     const id = formState.id
  //     delete formState.id
  //     this.props.updateBook(id, formState)
  //   }
  // }

  render() {
    console.log("Books Container Render")
    const genreBooks = this.props.books.filter(b => b.genre_id === this.genre.id)
    
    return (
      <div className="books-container">

        {/* Extract into seperate component */}


        {/* <HeaderB genre={this.genre} getForm={this.getForm} /> */}

        <div className="books-grid">
          <div className="books-grid-child first">
            <h4>{this.genre.name} <br /> Books</h4>
          </div>
          <div className="books-grid-child second">
            <BookForm genre_id={this.genre.id} addBook={this.props.addBook} submitValue="Add Book" />
          </div>
        </div>

        <Books 
          books={genreBooks}  
          getForm={this.getForm} 
          updateBook={this.props.updateBook}
          deleteBook={this.props.deleteBook}
        />

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