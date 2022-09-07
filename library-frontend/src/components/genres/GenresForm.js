import React, { Component } from "react";
import { connect } from 'react-redux';

import { addGenre } from '../../actions/genresActions'

class GenresForm extends Component {

  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addGenre(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="submit" value="Create" />
      </form>
    )
  }

}

export default connect(null, { addGenre })(GenresForm)