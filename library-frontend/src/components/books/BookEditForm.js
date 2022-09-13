import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBook } from "../../actions/booksActions"

class BookEditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.book.title,
      author: props.book.author,
      description: props.book.description, 
      genre_id: props.book.genre_id
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value, 
      genre_id: this.props.genre_id
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.updateBook(this.props.book.id, this.state)
    this.props.thing()
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="book-form-inputs">
          <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
          <span></span>
          <input type="text" value={this.state.author} onChange={this.handleChange} name="author"/>
        </div>
        
        <textarea 
          type="text" 
          className="book-form-inputs"
          rows="5" 
          cols="50"
          value={this.state.description} 
          onChange={this.handleChange}
          name="description"
        />

        <br />
        <input type="submit" value="Update"/>
      </form>
    )
  }
}


export default connect(null, { updateBook })(BookEditForm)
