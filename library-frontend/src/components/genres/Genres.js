import React from 'react';
import Genre from './Genre';
import { Link } from 'react-router-dom'

const Genres = ({genres, deleteGenre}) => {
  
  const renderGenres = genres.map(genre => {
    
    return ( 
      // <li>
      //   <Genre genre={genre} />
      // </li>
      
      <li>
        <Link to={`genres/${genre.id}/books`}>{genre.name}</Link>
      </li>

      // <Link key={genre.id} to={`/genres/${genre.id}`}>
      //   {genre.name}
      // </Link>

    //    <Link to={`/genres/${genre.id}`}>{genre.name}</Link> 
    //  </li>
    )
  }) 
  
  // <li key={genre.id}><Link to={`/genres/${genre.id}`} component={Genre}>{genre.name}</Link></li>)

  return <ul>{renderGenres}</ul>
  // return (
  //   <div>
  //     <h2>Genres List</h2>
  //     <ul>
  //       {(genres.map(genre=> <Genre genre={genre} key={genre.id} deleteGenre={deleteGenre}/>))}
  //     </ul>
  //     <br />
  //   </div>
  // )
}

export default Genres