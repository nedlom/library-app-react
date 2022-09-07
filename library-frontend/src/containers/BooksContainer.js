import React, { Component } from "react";
import { connect } from 'react-redux'

import { getBooksFromGenres } from '../actions/booksActions'
import Books from '../components/books/Books'

class BooksContainer extends Component {

  componentDidMount() {
    // console.log(this.props.genre.books)
    this.props.getBooksFromGenres(this.props.genre.books)
  }

  render() {
    // console.log(this.props)
    // console.log("BooksContainer: ", this.props )
    return <Books books={this.props.genre.books}/>
  }
}




export default connect(null, { getBooksFromGenres })(BooksContainer)