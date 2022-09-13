import React from "react";
import { connect } from "react-redux";

// import {
//   BrowserRouter as Router, Route
//  } from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";
import Router from "../router/Router";

import Home from "./Home";
import About from "./About";
import GenresContainer from "../containers/GenresContainer";
import BooksContainer from "../containers/BooksContainer"



import { fetchBooks } from '../actions/booksActions'
import { fetchGenres } from '../actions/genresActions'

class App extends React.Component {

  constructor() {
    super()
    console.log("App Constructor")
  }

  componentDidMount() {
    // console.log("app did mount")
    this.props.fetchGenres()
    this.props.fetchBooks()
    // console.log(this.props.genres)
    // console.log(this.props.books)
  }

  handleLoading = () => {
    if (this.props.books.length === 0 || this.props.genres.length === 0) {
      return <div>Loading...</div>
    } else {
      return (
        <Router />
      )
    }
  }

  render() {
    console.log("App Render ", "books: ", this.props.books, " genres: ", this.props.genres)

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

export default connect(mapStateToProps, { fetchBooks, fetchGenres })(App)