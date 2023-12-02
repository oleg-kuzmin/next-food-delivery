'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = 'home';

export const namePageSlice = createSlice({
  name: 'namePage',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changePage } = namePageSlice.actions;
export default namePageSlice.reducer;
