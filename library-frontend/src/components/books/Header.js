import React from "react";
import Form from "./Form";

const Header = ({ genre, getForm }) => {
  return (
    <div className="books-grid">
      <div className="books-grid-child first">
        <h4>{genre.name} <br /> Books</h4>
      </div>
      <div className="books-grid-child second">
        <Form getForm={getForm} submitValue="Add Book" />
      </div>
    </div>
  )
}

export default Header