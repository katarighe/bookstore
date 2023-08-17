import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => (
  <>
    <Book title="Book title" author="Book author" />
    <button type="button">Remove</button>
    <AddBook />
  </>
);

export default Books;
