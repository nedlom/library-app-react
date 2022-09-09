import React, { Component } from "react";
import { addBook } from '../../actions/booksActions'
import { connect } from 'react-redux'


class BooksForm extends Component {

  constructor() {
    super()
    this.state = {
      title: "",
      author: "",
      description: ""
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("hello there")
    const genreId = this.props.stuff.genres[parseInt(this.props.stuff.match.params.indexOf)].id
    const body = Object.assign({}, this.state, {genre_id: genreId})
    this.props.addBook(body)
    // debugger

    console.log(this.props)
  }

  render() {
    return (
      <div className="book-form">
        <div>Add A Book:</div>
        <form onSubmit={this.handleSubmit}>
          <div className="book-form-inputs">
            <input type="text" onChange={this.handleChange} value={this.state.title} name="title" placeholder="title"/>
          </div>

          <div className="book-form-inputs">
            <input type="text" onChange={this.handleChange} value={this.state.author} name="author" placeholder="author"/>
          </div>

          <div className="book-form-inputs">
            <textarea type="text" onChange={this.handleChange} value={this.state.description} name="description" placeholder="description"/>
          </div>

          <div className="book-form-inputs">
            <input type="submit" value="Add Book"/>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addBook })(BooksForm)
