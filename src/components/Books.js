import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const StoredBook = useSelector((state) => state.booksReducer);

  const AddNewBook = (e, NewBook) => {
    e.preventDefault();
    dispatch(addBook(NewBook));
  };
  const RemoveExistingBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <>
      {StoredBook.map((item) => (
        <Book
          key={item.id}
          title={item.title}
          item={item.id}
          author={item.author}
          id={item.id}
          RemoveExistingBook={RemoveExistingBook}
        />
      ))}
      <AddBook AddNewBook={AddNewBook} />
    </>
  );
};

export default Books;
