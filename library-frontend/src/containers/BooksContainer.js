import React, { Component } from "react";
import { connect } from 'react-redux'

import { fetchBooks } from '../actions/booksActions'
import Books from "../components/books/Books";
import BooksForm from "../components/books/BooksForm";

class BooksContainer extends Component {
  constructor(props) {
    super(props)
    
    this.genre = props.genres.find(g => {
      return g.id === parseInt(this.props.match.params.id)
    })
  }

  genreBooks = () => {
    return this.props.books.filter(b => b.genre_id === this.genre.id)
  }

  render() {
    debugger
    return (
    <div>
      <BooksForm />
      <Books genre={this.genre} books={this.genre.books} />
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


export default connect(mapStateToProps, { fetchBooks })(BooksContainer)