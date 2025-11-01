import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// persist config
const persistConfig = {
   key: 'root',
   storage,
};

// wrap reducer
const persistedReducer = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
   reducer: {
      theme: persistedReducer,
   },
});

// persistor
export const persistor = persistStore(store);
