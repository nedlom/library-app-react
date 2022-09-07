export const getBooksFromGenres = (books) => {
  return {
    type: 'ADD_BOOKS',
    payload: books
  }
}