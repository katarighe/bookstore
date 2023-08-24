import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/utilities';
import style from './AddBook.module.css';

const template = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};

export default function AddNewBook() {
  const [values, setValue] = useState(template);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setValue((values) => ({
      ...values, item_id: crypto.randomUUID(), [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addBook(values));
    setValue({});
  }

  return (
    <>
    <hr />
    <section>
      <h2>Add New Book</h2>
      <form>
        <input
          value={values.title || ''}
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className={style.inputs}
        />

        <input
          value={values.author || ''}
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          className={style.inputs}
        />

        <input
          value={values.category || ''}
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className={style.inputs}
        />

        <button type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </section>
    </>
  );
}
