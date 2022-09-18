import React, { Component } from "react";

class BookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.book ? props.book.id : "",
      title: props.book ? props.book.title : "", 
      author: props.book ? props.book.author : "", 
      description: props.book ? props.book.description : "",
      genre_id: props.genre_id
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
    const book = Object.assign({}, this.state)
    const id = book.id
    delete book.id

    if (id === "") {
      this.props.addBook(book)
    } else {
      this.props.toggleForm()
      this.props.updateBook(id, book)
      
    }
   
    this.setState({
          title: "",
          author: "",
          description: ""
        })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="book-form-inputs">
          <input 
            type="text" 
            value={this.state.title} 
            onChange={this.handleChange} 
            name="title"
            placeholder="Title"
          />
          <span></span>
          <input 
            type="text" 
            value={this.state.author} 
            onChange={this.handleChange} 
            name="author"
            placeholder="Author"
          />
        </div>
        
        <textarea 
          className="book-form-inputs"
          rows={this.props.submitValue === "Update" ? "8" : "5"} 
          cols={this.props.submitValue === "Update" ? "80" : "50"}
          value={this.state.description} 
          onChange={this.handleChange}
          name="description"
          placeholder="Description"
        />

        <br />
        <input type="submit" value={this.props.submitValue} />
      </form>
    )
  }
}

export default BookForm