import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Hitchhiker`s Guide to the Galaxy',
      author: 'Douglas Adams',
      category: 'Science fiction',
    },
    {
      item_id: 'item2',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
    },
    {
      item_id: 'item3',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Literary fiction',
    },
    {
      item_id: 'item4',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Classics',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
