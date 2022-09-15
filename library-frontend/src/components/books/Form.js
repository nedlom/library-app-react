import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.book ? props.book.id : "",
      title: props.book ? props.book.title : "", 
      author: props.book ? props.book.author : "", 
      description: props.book ? props.book.description : "",
      genre_id: props.book ? props.book.genre_id : ""
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   // debugger

  //   if( this.props.hasOwnProperty("addBook")) {
  //     const body = this.state
  //     delete body.id
  //     this.props.addBook(body)
  //   }

  //   if (this.props.hasOwnProperty("updateBook")) {
  //     const body = {title: "", author: "", description: "", genre_id: "", ...this.state}
  //     this.props.updateBook(this.state.id, body)
  //     this.props.toggleForm()
  //   }

  //   this.setState({
  //     title: "",
  //     author: "",
  //     description: ""
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault()
    this.props.getForm(this.state)

    this.setState({
          title: "",
          author: "",
          description: ""
        })

    if (this.props.toggleForm){
      this.props.toggleForm()
    }
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
          rows="5" 
          cols="50"
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

export default Form