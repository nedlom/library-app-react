import React, { Component } from "react";

class BookEditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.book.title,
      author: props.book.author,
      description: props.book.description
    }
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="text" value={this.state.title} />
        <span></span>
        <input type="text" value={this.state.author} />
        <br />
        <textarea type="text" 
        rows="5" 
        cols="50"
        
        value={this.state.description} />
        <br />
        <input type="submit" value="Update"/>
      </form>
    )
  }
}

export default BookEditForm
