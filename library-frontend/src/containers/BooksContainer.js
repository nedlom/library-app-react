import React, { Component } from "react";
import Books from '../components/books/Books'

class BooksContainer extends Component {

  render() {
    return (
      <div>
        <ul>
          <Books books={this.props.books} />
        </ul>
      </div>
    )
  }
}

export default BooksContainer