'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    //# новый заказ
    newOrder: (state, action) => {
      // проверяем новый ли это элемент массива
      const isNewElement = !state.some(item => {
        return item.id === action.payload.id;
      });
      // если это новый элемент, то добавим в конец массива
      if (isNewElement) {
        return [...state, { ...action.payload }];
      } else {
        // иначе обновим существующий
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item;
          } else {
            return {
              ...item,
              counter: action.payload.counter,
            };
          }
        });
      }
    },
    //# удаление заказа
    deleteOrder: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    //# очистка
    deleteBasket: () => {
      return [];
    },
  },
});

export const { newOrder, deleteOrder, deleteBasket } = basketSlice.actions;
export default basketSlice.reducer;
