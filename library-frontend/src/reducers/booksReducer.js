export const booksReducer = (state = [], action) => {
  // console.log("booksReducer:", state)
  
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload)
    default:
      return state
  }
}