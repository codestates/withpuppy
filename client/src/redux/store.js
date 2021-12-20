import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/User';
import mapSlice from './Slices/Map';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'persistData',
  storage,
  blacklist: ['mapSlice'],
};

const combinedReducers = combineReducers({
  userSlice,
  mapSlice,
});

const persistReducers = persistReducer(persistConfig, combinedReducers);

export default configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const selectUser = (state) => state.userSlice;
export const selectMap = (state) => state.mapSlice;
