import PropTypes from 'prop-types';

export default function Book({
  title,
  author,
  category,
  removeBook,
}) {
  return (
    <div className="book_container">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{category}</p>
        <button type="button" onClick={removeBook}>
          Remove
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
