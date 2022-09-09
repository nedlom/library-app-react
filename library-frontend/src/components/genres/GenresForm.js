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
      <div className="form-div">
        <form onSubmit={this.handleSubmit}>
          <label>Add A Genre</label>
          <br />
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Create" className='create-button' />
        </form>
      </div>
    )
  }
}

export default GenresForm