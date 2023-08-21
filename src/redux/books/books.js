const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initalState = [];
const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];

    case 'REMOVE_BOOKS':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addAction = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

export const removeAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
