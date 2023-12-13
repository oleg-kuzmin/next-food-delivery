'use client';
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '@/redux/slices/basketSlice';
import userReducer from '@/redux/slices/userSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
});
