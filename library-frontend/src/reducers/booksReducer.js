export const booksReducer = (state = [], action) => {
  // console.log("booksReducer:", state)
  
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload)
    case 'UPDATE_BOOK':
      const x = state.map(book => {
        if (book.id === action.payload.id) {
          return action.payload
        } else {
          return book
        }})
      return x
    default:
      return state
  }
}