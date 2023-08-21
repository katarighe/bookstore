import { combineReducers, configureStore } from "redux";
import bookReducer from "./books/books";
import categoriesReducer from "./categories/categories";

const rootReducer = combineReducers({
  books: bookReducer,
  categries: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;
