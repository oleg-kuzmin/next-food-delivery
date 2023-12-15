'use client';

import { createSlice } from '@reduxjs/toolkit';
const initialState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { saveUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
