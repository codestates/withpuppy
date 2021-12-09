import { createSlice } from '@reduxjs/toolkit';
import { afterKakoSignIn } from 'redux/Async/kakaoSignIn';
import { afterGoogleSignIn } from 'redux/Async/googleSignIn';
import { afterSignIn } from 'redux/Async/signIn';
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
    afterGoogleSignIn(builder);
    afterSignIn(builder);
    afterSignOut(builder);
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
