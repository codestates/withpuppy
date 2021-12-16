import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//abort signal test => to axios config

//! access token / refresh token
export const updateMypinMessages = createAsyncThunk(
  'updateMypinMessages',
  async (data, { rejectWithValue }) => {
    // data = {pinpointerId, text}

    try {
      const response = await axios.post('/mypage/pinppinter/message', data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);
