import React from "react";
import { connect } from "react-redux";

// import {
//   BrowserRouter as Router, Route
//  } from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";
import Router from "../router/Router";


import { fetchBooks } from '../actions/booksActions'
import { fetchGenres } from '../actions/genresActions'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchGenres()
    this.props.fetchBooks()
  }

  handleLoading = () => {
    if (this.props.books.length === 0 || this.props.genres.length === 0) {
      return <div>Loading...</div>
    } else {
      return <Router />
    }
  }

  render() {

    return (
      <div>
        <Header />
        {this.handleLoading()}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    books: state.books,
    genres: state.genres
  })
}

const mapDispatchToProps = dispatch => {
  return { 
    fetchBooks: () => dispatch(fetchBooks()),
    fetchGenres: () => dispatch(fetchGenres())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)