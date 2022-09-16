import React, { Component } from "react";
// import BookEditForm from "./BookEditForm";
import BookDetails from "./BookDetails";
import BookButtons from "./BookButtons";

import BookForm from "./BookForm";

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
    let comp
    if (this.state.showForm) {
      comp = <BookForm 
                toggleForm={this.toggleForm} 
                book={this.props.book} 
                genre_id={this.props.book.genre_id}
                updateBook={this.props.updateBook} 
                submitValue={"Update"}
              />
    } else {
      comp = <BookDetails book={this.props.book} />
    }

    return (
      <div className="book-card">
        {comp}
        <hr />
        <BookButtons 
          book={this.props.book} 
          deleteBook={this.props.deleteBook} 
          buttonClick={this.toggleForm}
        />
      </div>
    )
  }
}

export default Book