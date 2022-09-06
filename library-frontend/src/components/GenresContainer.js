import React, { Component } from "react";
import { connect } from 'react-redux'

import { fetchGenres, deleteGenre } from '../actions/genresActions';
import Genres from "./Genres";

class GenresContainer extends Component {

  componentDidMount() {
    this.props.fetchGenres()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Genres genres={this.props.genres} deleteGenre={this.props.deleteGenre} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { genres: state.genres }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchGenres, 
//     deleteGenre
//   }
// }

export default connect(mapStateToProps, {fetchGenres, deleteGenre})(GenresContainer)