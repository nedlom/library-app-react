import React, { Component } from "react";
import { connect } from 'react-redux'

import { 
  fetchGenres,
  addGenre, 
  deleteGenre 
} from '../actions/genresActions';

import Genres from "../components/genres/Genres";
import GenresForm from "../components/genres/GenresForm";


class GenresContainer extends Component {
  constructor() {
    super() 
  }

  componentDidMount() {
    this.props.fetchGenres()
  }

  render() {
    return (
      <div id="genre-container">
        <GenresForm addGenre={this.props.addGenre}/>
        <Genres genres={this.props.genres} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { genres: state.genres }
}

export default connect(mapStateToProps, {fetchGenres, addGenre, deleteGenre})(GenresContainer)