import React, { Component } from "react";
import { connect } from 'react-redux'

import { fetchGenres } from '../actions/genresActions';
import Genres from "./Genres";

class GenresContainer extends Component {

  componentDidMount() {
    this.props.fetchGenres()
  }

  render() {
    return (
      <div>
        <Genres genres={this.props.genres}/>
        {/* Here's Somethin! */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { genres: state.genres }
}

export default connect(mapStateToProps, { fetchGenres })(GenresContainer)