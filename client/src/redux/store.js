import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/User';

export default configureStore({
  reducer: {
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const oauthSelector = (state) => state.userSlice;
