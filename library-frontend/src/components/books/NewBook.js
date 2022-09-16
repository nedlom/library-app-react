import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../../actions/booksActions";



import { Route, useHistory } from "react-router-dom";

class NewBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      author: "",
      description: "",
      genre_id: ""
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
        <input />
        <input />
        <input />
        <input type="submit" value="create" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: body => dispatch(addBook(body))
  }
}

export default connect(null, mapDispatchToProps)(NewBook)