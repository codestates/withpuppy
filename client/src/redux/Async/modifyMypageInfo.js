import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//abort signal test => to axios config

//! access token / refresh token
export const modifyMypageInfo = createAsyncThunk(
  'modifyMyapgeInfo',
  async (data, { rejectWithValue }) => {
    // data = {type, ...formdata}

    try {
      const response = await axios.patch('/mypage', data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

export const afterModifyMyapgeInfo = (builder) => {
  builder.addCase(modifyMypageInfo.fulfilled, (state, action) => {
    state.userData = action.payload;
  });
};

//! another api functions
