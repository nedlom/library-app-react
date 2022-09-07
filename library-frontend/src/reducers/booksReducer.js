export const booksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BOOKS':
      return [...state, ...action.payload]
    default:
      return state
  }
}