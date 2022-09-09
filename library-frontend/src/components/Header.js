import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import GenresContainer from "../containers/GenresContainer";
import BooksContainer from "../containers/BooksContainer"
import BooksContainerTest from "../containers/BookContainerTest";
import Genre from "./genres/Genre";
import Book from "./books/Book";

const Header = () => {
  return (
    <header>
      <h1>Book Tracker</h1>

      
            <div>
              <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/genres">Genres</Link>
              </nav>
            </div>
            <hr />
           
            
            
    
    </header>
  )
}

export default Header