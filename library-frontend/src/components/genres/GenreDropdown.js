import React from "react";
import { connect } from 'react-redux'

const GenreDropdown = props => {

  const options = props.genres.map(genre => {
    return <option>{genre.name}</option>
  })

  return (
    <form>
      <select>
        {options}
      </select>
      <input type="submit"/>
    </form>
  )
}

const mapStateToProps = state => {
  return ({
    genres: state.genres
  })
}

export default connect(mapStateToProps)(GenreDropdown)