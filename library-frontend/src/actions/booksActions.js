export const getBooksFromGenres = (books) => {
  return {
    type: 'ADD_BOOKS',
    payload: books
  }
}

export const fetchBooks = () => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3001/books')
    .then(resp => resp.json())
    .then(books => dispatch({ type: 'FETCH_BOOKS', payload: books})
  )}
}