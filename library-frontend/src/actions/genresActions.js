export const fetchGenres = () => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3001/genres')
    .then(resp => resp.json())
    .then(genres => dispatch({ type: 'FETCH_GENRES', payload: genres})
  )}
}