import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Router from "../router/Router";

import { fetchBooks } from '../actions/booksActions'
import { fetchGenres } from '../actions/genresActions'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchBooks()
    this.props.fetchGenres()
  }

  handleLoading = () => {
    if (this.props.books.length === 0 || this.props.genres.length === 0) {
      return <div>Loading...</div>
    } else {
      return <Router />
    }
  }

  render() {
    console.log("App Render")
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