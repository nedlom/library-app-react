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
    console.log("GenresContainer Constructor")
  }
  
  componentDidMount() {
    this.props.fetchGenres()
  }

  render() {
    console.log("GenresContainer Render")
    return (
      <div id="genre-container">
        <GenresForm addGenre={this.props.addGenre}/>
        <Genres genres={this.props.genres} deleteGenre={this.props.deleteGenre} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { genres: state.genres }
}

export default connect(mapStateToProps, {fetchGenres, addGenre, deleteGenre})(GenresContainer)