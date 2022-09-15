import React, { Component } from "react";
import BookEditForm from "./BookEditForm";
import BookDetails from "./BookDetails";
import BookButtons from "./BookButtons";

import Form from "./Form";

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

  render() {
    console.log("Book.js")
    const showForm = this.state.showForm
    let comp
    if (showForm) {
      comp = <Form toggleForm={this.toggleForm} book={this.props.book} getForm={this.props.getForm} submitValue={"Update"}/>
    } else {
      comp = <BookDetails book={this.props.book} />
    }

    
    return (
      <div className="book-card">
        {comp}
        <hr />
        <BookButtons book={this.props.book} deleteBook={this.props.deleteBook} buttonClick={this.toggleForm}/>
      </div>
    )
  }
}

export default Book