import React from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import GenresContainer from "../containers/GenresContainer";
import BooksContainer from "../containers/BooksContainer"
import BooksContainerTest from "../containers/BookContainerTest";
import Genre from "./genres/Genre";
import Book from "./books/Book";

import { fetchBooks } from '../actions/booksActions'
import { fetchGenres } from '../actions/genresActions'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchGenres()
    this.props.fetchBooks()
  }

  render() {
    return (
      <div id="container">

<Router>
        <Header />

      
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/genres">
                <GenresContainer />
              </Route>
              <Route exact path="/genres/:id" render={props => <BooksContainer {...props} />} />
            </Switch>
      </Router>
{/* 
          <Router>
            <div>
              <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/genres">Genres</Link>
              </nav>
            </div>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/genres">
                <GenresContainer />
              </Route>
              <Route exact path="/genres/:id" render={props => <BooksContainer {...props} />} />
            </Switch>
              
      
            
          </Router> */}

        {/* <Footer />  */}
      </div>
    )
  }
}

// export default App

export default connect(null, { fetchBooks, fetchGenres })(App)