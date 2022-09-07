import React, { Component } from "react";
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchGenres, deleteGenre } from '../actions/genresActions';
import Genres from "../components/genres/Genres";
import Genre from "../components/genres/Genre";

import GenresForm from "../components/genres/GenresForm";

class GenresContainer extends Component {

  componentDidMount() {
    this.props.fetchGenres()
  }

  render() {
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