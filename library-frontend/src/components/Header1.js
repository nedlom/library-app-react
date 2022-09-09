import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const Header = () => {
  return (
    <header>
      <h1>Book Tracker</h1>
      <hr />


      <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue",
      }}
    >
      Home
    </NavLink>
    
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      About
    </NavLink>
    <NavLink
      to="/genres"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      Genres
    </NavLink>
    <NavLink
      to="/genres/new"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      Create Genre
    </NavLink>


    
    </header>
  )
}

export default Header