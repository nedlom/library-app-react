import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { genresReducer } from "./genresReducer";

export const rootReducer = combineReducers({
  genres: genresReducer,
  books: booksReducer
})