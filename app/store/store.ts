// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
// import productsReducer from './productsSlice';
//
// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         products: productsReducer,
//     },
// });
//
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterReducer from './Slice/counterSlice';
import productsReducer from './Slice/productsSlice';

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
