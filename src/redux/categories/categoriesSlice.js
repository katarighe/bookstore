// Actions
const CHECK_CATEGORY = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      return ['Under construction'];
    },
  },
});

// Action creator
export const checkAction = () => ({
  type: CHECK_CATEGORY,
});

export default categorySlice.reducer;