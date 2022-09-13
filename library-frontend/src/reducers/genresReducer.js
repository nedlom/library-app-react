export const genresReducer = (state = [], action) => {
  // console.log("genresReducer", state)
  
  switch(action.type) {
    case 'FETCH_GENRES':
      return action.payload
    case 'ADD_GENRE':
      return [...state, action.payload]
    case 'ADD_BOOK_TO_GENRE':
      return [...state, action.payload]
    case 'DELETE_GENRE':
      return state.filter(genre => genre.id !== action.payload)
    default:
      return state
  }
}