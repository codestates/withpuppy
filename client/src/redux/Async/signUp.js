import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//! access token / refresh token
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/auth/signup', data);

      return {
        data: response.data,
      };
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

export const afterSignUp = (builder) => {
  builder.addCase(signUp.fulfilled, (state, action) => {
    console.log('success', action.payload);
  });
};

//! another api functions
