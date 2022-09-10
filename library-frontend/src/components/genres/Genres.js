import React from 'react';

import Genre from './Genre';

const Genres = props => {
  return (
    <div className="genre-grid" >
      {props.genres.map((genre, index) => (
          <Genre key={genre.id} genre={genre} index={index} deleteGenre={props.deleteGenre} />
      ))}
    </div>
  )
}

export default Genres