export const booksReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'ADD_BOOKS':
      return [...state, ...action.payload]
    default:
      return state
  }
}