import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features';

export const store = configureStore({
   reducer: {
      theme: themeReducer,
   },
});