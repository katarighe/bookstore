import PropTypes from 'prop-types';
import style from './Book.module.css';
import ProgressBar from './ProgressBar';

const line = {
  width: '5em',
  border: '1px solid #e3e3e3',
  transform: 'rotate(90deg)',
  marginRight: '-1.5em',
};

export default function Book({
  title,
  author,
  category,
  removeBook,
}) {
  const chapter = () => Math.floor(Math.random() * 30);
  return (
    <div className={style.wrapper}>
      <div className={style.book}>
        <div className={style.book_details}>
          <h3>{category}</h3>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className={style.btn_container}>
          <button type="button" className={style.btn}>
            Comments
          </button>
          <button type="button" onClick={removeBook} className={style.btn}>
            Remove
          </button>
          <button type="button" className={style.btn}>
            Edit
          </button>
        </div>
      </div>
      <ProgressBar />
      <div style={line} />
      <div className={style.chapter}>
        <div>
          <p className={style.chapter_heading}>CURRENT CHAPTER</p>
          <p className={style.chapter}>{`Chapter ${chapter()}`}</p>
        </div>
        <button type="button" className={style.progress_update}>
          UPDATE PROGRESS
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
