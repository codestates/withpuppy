import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//! access token / refresh token
export const kakaoSignUp = createAsyncThunk(
  'auth/kakao',
  async (code, { rejectWithValue }) => {
    try {
      const response = await axios.post('/kakao/signup', {
        code,
        socialType: 'kakao',
      });

      return {
        status: response.status,
        data: response.data,
      };
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

export const afterKakoSignUp = (builder) => {
  builder.addCase(kakaoSignUp.pending, (state, action) => {
    console.log('pending dispatched');
  });
  builder.addCase(kakaoSignUp.fulfilled, (state, action) => {
    console.log('fullfilled addressed from thunk process', action.payload);
  });
  // <thunk 처리과정 중에 reject를 처리하여 바로 redux state에 반영하고 싶을 때
  builder.addCase(kakaoSignUp.rejected, (state, action) => {
    console.log('reject addressed from thunk process', action.payload);
  });
};

//! another api functions
