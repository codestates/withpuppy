import { createSlice } from '@reduxjs/toolkit';
import { afterKakoSignUp } from 'redux/Async/kakaoSignUp';

//! extraReducers
const extraReducers = (builder) => {
  afterKakoSignUp(builder);
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers,
});

export const { kakaoOauth } = userSlice.actions;
export default userSlice.reducer;
