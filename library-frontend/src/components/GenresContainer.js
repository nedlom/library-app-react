import React, { Component } from "react";
import { connect } from 'react-redux'

import { fetchGenres } from '../actions/genresActions';

class GenresContainer extends Component {

  componentDidMount() {
    this.props.fetchGenres()
  }

  render() {
    return (
      <div>
        Here's Somethin!
      </div>
    )
  }
}

export default connect(null, { fetchGenres })(GenresContainer)