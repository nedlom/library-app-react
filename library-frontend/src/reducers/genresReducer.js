export const genresReducer = (state = [], action) => {
  
  switch(action.type) {
    case 'FETCH_GENRES':
      return action.payload
    case 'ADD_GENRE':
      return [...state, action.payload]
    default:
      return state
  }
}