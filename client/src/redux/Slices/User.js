import { createSlice } from '@reduxjs/toolkit';
import { afterKakoSignIn } from 'redux/Async/kakaoSignIn';

//! extraReducers
const extraReducers = (builder) => {
  afterKakoSignIn(builder);
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    socialData: {},
  },
  reducers: {},
  extraReducers,
});

export const { kakaoOauth } = userSlice.actions;
export default userSlice.reducer;
