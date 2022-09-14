import React, { Component } from "react";

class BooksForm extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      title: "",
      author: "",
      description: "",
      genre_id: this.props.genre_id
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value, 
      // genre_id: this.props.genre_id
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.props)
    this.props.addBook(this.state)
    this.setState({
        title: "",
        author: "",
        description: "",
        // genre_id: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="book-form-inputs">
          <input type="text" onChange={this.handleChange} value={this.state.title} name="title" placeholder="title"/>
          <span></span>
          <input type="text" onChange={this.handleChange} value={this.state.author} name="author" placeholder="author"/>
        </div>
        
        <div className="book-form-inputs">
          <textarea 
            rows="5" 
            cols="50" 
            type="text" 
            onChange={this.handleChange} 
            value={this.state.description} 
            name="description" 
            placeholder="description"
          />
        </div>
        
        <div className="book-form-inputs">
          <input type="submit" value="Add Book"/>
        </div>
      </form>
    )
  }
}

export default BooksForm