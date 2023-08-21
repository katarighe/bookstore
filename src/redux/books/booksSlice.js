import { createSlice } from '@reduxjs/toolkit';

// Actions
const initialState = {
  books: [],
};

// Reducers
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Action creators
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
