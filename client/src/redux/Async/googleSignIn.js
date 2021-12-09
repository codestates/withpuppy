import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//! access token / refresh token
export const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async (data, { rejectWithValue }) => {
    const { code, social } = data;
    try {
      const response = await axios.post('/google/signIn', {
        code,
        social,
      });

      return {
        data: response.data,
      };
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

export const afterGoogleSignIn = (builder) => {
  builder.addCase(googleSignIn.pending, (state, action) => {
    console.log('pending dispatched');
  });
  builder.addCase(googleSignIn.fulfilled, (state, action) => {
    state.loginState = true;
    state.userData = action.payload.data;
  });
  // <thunk 처리과정 중에 reject를 처리하여 바로 redux state에 반영하고 싶을 때
  builder.addCase(googleSignIn.rejected, (state, action) => {
    console.log('reject addressed from thunk process', action.payload);
  });
};

//! another api functions
