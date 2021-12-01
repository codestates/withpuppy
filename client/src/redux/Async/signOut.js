import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//! access token / refresh token
export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/auth/signOut');

      return {
        data: response.data,
      };
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

export const afterSignOut = (builder) => {
  builder.addCase(signOut.fulfilled, (state, action) => {
    state.loginState = false;
    state.userData = {};
  });
};

//! another api functions
