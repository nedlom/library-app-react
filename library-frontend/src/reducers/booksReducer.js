export const booksReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload)
    case 'UPDATE_BOOK':
      const newState = state.map(book => {
        if (book.id === action.payload.id) {
          return action.payload
        } else {
          return book
        }})
      return newState
    default:
      return state
  }
}

// export const booksReducer = (
//   state = { books: [], requesting: false}, 
//   action) => {
  
  
//   switch(action.type) {
//     case 'START_FETCHING_BOOKS_REQUEST':
//       return {
//         ...state, 
//         books: [...state.books], 
//         requesting: true
//       }
//     case 'FETCH_BOOKS':
//       return {
//         ...state,
//         books: action.payload,
//         requesting: false
//       }

//     default:
//       return state
//   }
// }