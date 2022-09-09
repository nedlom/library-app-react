import React, { Component } from "react";
import { connect } from 'react-redux'

import { fetchBooks } from '../actions/booksActions'
import { fetchGenres } from '../actions/genresActions';

import Books from "../components/books/Books";
import BooksForm from "../components/books/BooksForm";

class BooksContainer extends Component {
  constructor(props) {
    console.log("here")
    super(props)
    // this.props.fetchGenres()
    // this.genre = props.genres[props.match.params.indexOf]
    // this.books = this.genre.books
  }

  // componentDidMount = () => {
  //   this.props.fetchGenres()
  // }

  render() {
    return (
    <div>
      <BooksForm stuff={this.props} />
      <Books />
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


export default connect(mapStateToProps, { fetchBooks, fetchGenres })(BooksContainer)