import React, { Component } from "react";
import BookEditForm from "./BookEditForm";
import BookDetails from "./BookDetails";


class Book extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  handleButtonClick = () => {
    console.log(this.state)
    this.setState({
      showForm: true
    })
  }

  handleFormSubmit = (event) =>  {
    event.preventDefault()
    this.setState({
      showForm: false
    })
  }

  
  render() {
    const showForm = this.state.showForm
    let comp

    if (showForm) {
      comp = <BookEditForm onSubmit={this.handleFormSubmit} book={this.props.book} />
    } else {
      comp = <BookDetails book={this.props.book} onClick={this.handleButtonClick} />
    }

    return (
      <div className="book-card">
      {comp}
     <button className="delete-book-btn" 
        onClick={() => this.props.deleteBook(this.props.book.id)}
        >
        delete
      </button>  
    </div>

    )
  }
}

export default Book