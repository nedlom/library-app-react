import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import BooksContainerTest from '../../containers/BooksContainer';


import Genre from './Genre';

const Genres = ({ genres }) => {
  
  return (
    <div className="grid-container" >
      {genres.map(genre => (
          <Genre genre={genre} />
      ))}
    </div>
  )
}

export default Genres