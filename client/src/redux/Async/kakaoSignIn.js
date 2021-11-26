import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//! access token / refresh token
export const kakaoSignIn = createAsyncThunk(
  'auth/kakao',
  async (code, { rejectWithValue }) => {
    try {
      const response = await axios.post('/kakao/signIn', {
        code,
        socialType: 'kakao',
      });

      return {
        status: response.status,
        data: response.data.data,
      };
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

export const afterKakoSignIn = (builder) => {
  builder.addCase(kakaoSignIn.pending, (state, action) => {
    console.log('pending dispatched');
  });
  builder.addCase(kakaoSignIn.fulfilled, (state, action) => {
    state.socialData = action.payload;
  });
  // <thunk 처리과정 중에 reject를 처리하여 바로 redux state에 반영하고 싶을 때
  builder.addCase(kakaoSignIn.rejected, (state, action) => {
    console.log('reject addressed from thunk process', action.payload);
  });
};

//! another api functions
