import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import GenresContainer from "../containers/GenresContainer";
import GenresForm from "../components/genres/GenresForm";
import Genres from "../components/genres/Genres";

import Genre from "../components/genres/Genre";
import BooksContainer from "../containers/BooksContainer";


const Routes = () => {
  return (
    <Router>

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/genres" component={GenresContainer} />
      <Route exact path="/genres/new" component={GenresForm} />
      <Route exact path="/genres/:id/books" component={Genre} />
      <Route exact path="/books" component={BooksContainer} />
      {/* <Route exact path="/genres/1" component={Genre} /> */}
    </Router>
  )
}

export default Routes