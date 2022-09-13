import React from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router, Route
 } from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";
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

  render() {
    console.log("App Render ", "books: ", this.props.books, " genres: ", this.props.genres)

    return (
      
        <Router>
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/genres" component={GenresContainer} /> 
          <Route exact path="/genres/:id" render={routerProps => <BooksContainer {...routerProps} />} />

            {/* <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/about">
              <About />
            </Route>
            <Route  exact path="/genres">
              <GenresContainer />
            </Route>
            <Route path="/genres/:id/:name" render={routerProps => <BooksContainer {...routerProps}/>} /> */}
        <Footer /> 
        </Router>     
        
    
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