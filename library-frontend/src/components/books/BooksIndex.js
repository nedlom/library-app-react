import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class BooksIndex extends Component {

  render() {
    const books = this.props.books.map(book => (
      <li key={book.id}>
        <Link to={`/books/${book.id}`}>
          {book.title}
        </Link>
      </li>
    ))

    return (
      <ul>{books}</ul>
    )
  }
}

const mapStateToProps = state => {
  return({
    books: state.books
  })
}

export default connect(mapStateToProps)(BooksIndex)