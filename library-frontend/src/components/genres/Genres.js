import React from 'react';

import Genre from './Genre';

const Genres = (props) => {
  return (
    <div className="grid-container" >
      {props.genres.map((genre, index) => (
          <Genre genre={genre} index={index} deleteGenre={props.deleteGenre} />
      ))}
    </div>
  )
}

export default Genres