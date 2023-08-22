import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      category: "Science fiction",
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Literary fiction",
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classics",
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
    },
  ],
};

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

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
