import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/User';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'userInfo',
  storage,
};

const combinedReducers = combineReducers({
  userSlice,
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
