import React, { Component } from "react";
import { connect } from 'react-redux'

import { fetchGenres, deleteGenre } from '../actions/genresActions';
import Genres from "../components/genres/Genres";
import GenresForm from "../components/genres/GenresForm";
import GenreDropdown from "../components/genres/GenreDropdown";


class GenresContainer extends Component {
  constructor() {
    super() 
    this.state = { isActive: false}
  }

  componentDidMount() {
    this.props.fetchGenres()
  }

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <div id="genre-container" className={this.state.isActive ? "no-display" : null}>
        <GenresForm />
        <Genres genres={this.props.genres} />
        <button onClick={this.handleToggle}>Toggle Container</button>
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