// import React, { Component } from "react";
import React, { useState } from 'react';


import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import { addGenre } from '../../actions/genresActions'


// class GenresForm extends Component 
const GenresForm = (props) => {

  const history = useHistory();

  // constructor() {
  //   super()
  //   this.state = {
  //     name: ""
  //   }
  // }

  const [name, setName] = useState("")

  // handleChange = event => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }

  const handleChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    // this.props.addGenre(this.state)
    props.addGenre(name)
    setName("")
    // this.setState({
    //   name: ""
    // })
    history.push("/genres")
  }

  // render() {
    return (
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label>Add A Genre</label>
          <br />
          <input type="text" name="name" value={name} onChange={handleChange} />
          <br />
          <input type="submit" value="Create" className='create-button' />
        </form>
      </div>
      
    )
  }

// }

export default connect(null, { addGenre })(GenresForm)