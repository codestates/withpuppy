import { createSlice } from '@reduxjs/toolkit';
import { afterKakoSignIn } from 'redux/Async/kakaoSignIn';
import { afterGoogleSignIn } from 'redux/Async/googleSignIn';
import { afterSignIn } from 'redux/Async/signIn';
import { afterSignOut } from 'redux/Async/signOut';
import { afterModifyMyapgeInfo } from 'redux/Async/modifyMypageInfo';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loginState: false,
    userData: {},
  },
  reducers: {
    changeProfile: (state, { payload: { type, newUrl } }) => {
      if (type === 'user') {
        state.userData.thumbImg = newUrl;
      } else if (type === 'puppy') {
        state.userData.puppy.puppyProfile = newUrl;
      }
    },
    logout: (state, action) => {
      state.loginState = false;
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    afterKakoSignIn(builder);
    afterGoogleSignIn(builder);
    afterSignIn(builder);
    afterSignOut(builder);
    afterModifyMyapgeInfo(builder);
  },
});

export const { changeProfile, logout } = userSlice.actions;
export default userSlice.reducer;
