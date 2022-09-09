import React from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
 
  Route,
 
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

  componentDidMount() {
    this.props.fetchGenres()
    this.props.fetchBooks()
  }

  render() {
    console.log("App")
    return (
      <div id="container">
        <Router>
          <Header />
          {/* <Switch> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/about">
              <About />
            </Route>
            <Route  exact path="/genres">
              <GenresContainer />
            </Route>
            <Route path="/genres/:id/:name" render={routerProps => <BooksContainer {...routerProps}/>} />
        </Router>     
        <Footer /> 
      </div>
    )
  }
}



export default connect(null, { fetchBooks, fetchGenres })(App)