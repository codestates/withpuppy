import { createSlice } from '@reduxjs/toolkit';
import { afterKakoSignIn } from 'redux/Async/kakaoSignIn';
import { afterSignOut } from 'redux/Async/signOut';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loginState: false,
    userData: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    afterKakoSignIn(builder);
    afterSignOut(builder);
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
