import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//! access token / refresh token
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/auth/signUp', formData);

      return {
        data: response.data,
      };
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

export const afterSignIn = (builder) => {
  builder.addCase(signUp.fulfilled, (state, action) => {
    console.log(action.payload);
  });
};

//! another api functions
