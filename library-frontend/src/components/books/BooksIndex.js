import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class BooksIndex extends Component {

  genreDropdown = () => {
    const options = this.props.genres.map(genre => (
      <option value={genre}>{genre.name}</option>
    )) 

    return <select>{options}</select>
  }

  render() {
    const books = this.props.books.map(book => (
      <li key={book.id}>
        <Link to={`/books/${book.id}`}>
          {book.title}
        </Link>
      </li>
    ))

    return (
      <div>
        {this.genreDropdown()}
        <ul>{books}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    books: state.books,
    genres: state.genres
  })
}

export default connect(mapStateToProps)(BooksIndex)