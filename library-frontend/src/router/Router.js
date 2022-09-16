import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../components/Home";
import About from "../components/About";
import GenresContainer from "../containers/GenresContainer";
import BooksContainer from "../containers/BooksContainer";
import NewBook from "../components/books/NewBook";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/genres" component={GenresContainer} /> 
      <Route exact path="/genres/:id" component={BooksContainer} />
      <Route exact path="/books"></Route>
      <Route exact path="genres/:id/books/new" component={NewBook} />
    </BrowserRouter>
  )
}

export default Router