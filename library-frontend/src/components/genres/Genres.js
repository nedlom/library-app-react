import React from 'react';


import Genre from './Genre';

const Genres = ({ genres }) => {
  
  return (
    <div className="grid-container" >
      {genres.map(genre => (
          <Genre genre={genre} indexOf={genres.indexOf(genre)} />
      ))}
    </div>
  )
}

export default Genres