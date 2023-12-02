'use client';

import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '@/redux/slices/basketSlice';
import namePageReducer from '@/redux/slices/namePageSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    page: namePageReducer,
  },
});
