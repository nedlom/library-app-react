export const fetchBooks = () => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3001/books')
    .then(resp => resp.json())
    .then(books => dispatch({ type: 'FETCH_BOOKS', payload: books})
  )}
}

export const addBook = (body) => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3001/books', {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(book => dispatch({ type: 'ADD_BOOK', payload: book})
  )}
}

export const deleteBook = (id) => {
  return(dispatch) => {
    fetch(`http://127.0.0.1:3001/books/${id}`, {
      method: 'DELETE'
    })
    .then(dispatch({ type: 'DELETE_BOOK', payload: id}))
  }
}
