export const fetchGenres = () => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3001/genres')
    .then(resp => resp.json())
    .then(genres => dispatch({ type: 'FETCH_GENRES', payload: genres})
  )}
}

export const addGenre = (name) => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3001/genres', {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name})
    })
    .then(resp => resp.json())
    .then(genre => dispatch({ type: 'ADD_GENRE', payload: genre})
  )}
}

export const deleteGenre = (id) => {
  return(dispatch) => {
    fetch(`http://127.0.0.1:3001/genres/${id}`, {
      method: 'DELETE'
    })
    .then(dispatch({ type: 'DELETE_GENRE', payload: id}))
  }
}

