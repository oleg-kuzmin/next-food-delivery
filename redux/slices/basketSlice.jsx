'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    //# новый заказ
    newOrder: (state, action) => {
      // проверяем новый ли это элемент массива
      const isNewElement = !state.basket.some(item => {
        return item.id === action.payload.id;
      });
      // если это новый элемент, то добавим в конец массива
      if (isNewElement) {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload }],
        };
      } else {
        // иначе обновим существующий
        return {
          ...state,
          basket: state.basket.map(item => {
            if (item.id !== action.payload.id) {
              return item;
            } else {
              return {
                ...item,
                counter: action.payload.counter,
              };
            }
          }),
        };
      }
    },
    //# удаление заказа
    deleteOrder: (state, action) => {
      return { ...state, basket: state.basket.filter(item => item.id !== action.payload.id) };
    },
    //# обновление счетчика
    updateCounter: (state, action) => {
      return {
        ...state,
        basket: state.basket.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, counter: action.payload.counter };
          } else {
            return item;
          }
        }),
      };
    },
  },
});

export const { newOrder, deleteOrder, updateCounter } = basketSlice.actions;
export default basketSlice.reducer;
