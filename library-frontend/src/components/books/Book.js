import React, { Component } from "react";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import { updateBook } from "../../actions/booksActions";
import { connect } from "react-redux"

class Book extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  toggleForm = () => {
    console.log(this.state)
    this.setState((state) => ({
      showForm: !this.state.showForm
    }))
  }

  bookCardMain = book => {
    if (this.state.showForm) {
      return (
        <BookForm 
          toggleForm={this.toggleForm} 
          book={book} 
          genre_id={book.genre_id}
          updateBook={this.props.updateBook} 
          submitValue={"Update"}
        /> 
      )
    } else {
      return <BookDetails book={book} />
    }
  }

  render() {
    const book = this.props.books.find(book => {
      return book.id === parseInt(this.props.match.params.id)
    })

    return (
      <div className="book-card">
        {this.bookCardMain(book)}
        <hr />
        <button className="book-btn" onClick={this.toggleForm}>
            Edit
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { books: state.books }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBook: (id, body) => dispatch(updateBook(id, body)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)