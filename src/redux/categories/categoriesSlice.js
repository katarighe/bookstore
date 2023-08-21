import { createSlice } from '@reduxjs/toolkit';
// Actions

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
