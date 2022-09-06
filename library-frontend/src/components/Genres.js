import React from 'react';
import Genre from './Genre';

const Genres = ({ genres }) => {
  console.log(genres)
  return (
    <div>
      <h2>Genres List</h2>
      <ul>
        {(genres.map(genre=> <Genre genre={genre} key={genre.id} />))}
      </ul>
      <br />
    </div>
  )
}

export default Genres