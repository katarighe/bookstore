import { React, useState } from 'react';

const AddBook = ({ AddNewBook }) => {
  const [NewBook, setNewBook] = useState({ title: '', author: '' });

  return (
    <div id='form_container'>
      <h2>Add New Book</h2>
      <form
        onSubmit={(e) => {
          AddNewBook(e, NewBook);
          setNewBook({ title: "", author: "" });
        }}
      >
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={NewBook.title}
          required
          onChange={(e) => setNewBook({ ...NewBook, title: e.target.value })}
        />
        <input
          type='text'
          name='author'
          placeholder='Author'
          value={NewBook.author}
          required
          onChange={(e) => setNewBook({ ...NewBook, author: e.target.value })}
        />
        <button type='submit' id='add_book'>
          Add Book
        </button>
      </form>
    </div>
  );
};

AddBook.PropTypes = {
  AddNewBook: PropTypes.func.isRequired,
};

export default AddBook;
