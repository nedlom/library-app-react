import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../components/Home";
import About from "../components/About";
import GenresContainer from "../containers/GenresContainer";
import BooksContainer from "../containers/BooksContainer";
import BooksIndex from "../components/books/BooksIndex";
import Book from "../components/books/Book";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/genres" component={GenresContainer} /> 
      <Route exact path="/genres/:id" component={BooksContainer} />
      <Route exact path="/books" component={BooksIndex} />
      <Route exact path="/books/:id" component={Book} />
    </BrowserRouter>
  )
}

export default Router