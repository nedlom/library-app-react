import React, { Component } from "react";

class GenresForm extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = event => {
    this.setState({
      name:  event.target.value
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
      <form onSubmit={this.handleSubmit} className="genre-form">
        <input 
          type="text"  
          value={this.state.name} 
          onChange={this.handleChange} 
          placeholder="Add Genre"
        />
        <input type="submit" value="Create" className='genre-button' />
      </form>
    )
  }
}

export default GenresForm