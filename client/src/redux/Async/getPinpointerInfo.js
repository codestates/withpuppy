import axios from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPinpointerInfo = createAsyncThunk(
  'getPinpointerInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/mypage/pinpointer');

      return {
        data: response.data,
      };
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

//! another api functions
