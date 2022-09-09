import React, { Component } from "react";

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.title} name="title"/>
        <input type="text" onChange={this.handleChange} value={this.state.author} name="author"/>
        <textarea type="text" onChange={this.handleChange} value={this.state.description} name="description"/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default BooksForm
