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
  reducers: {
    changeProfile: (state, { payload: { type, newUrl } }) => {
      if (type === 'user') {
        state.userData.thumbImg = newUrl;
      } else if (type === 'puppy') {
        state.userData.puppy.puppyProfile = newUrl;
      }
    },
  },
  extraReducers: (builder) => {
    afterKakoSignIn(builder);
    afterGoogleSignIn(builder);
    afterSignIn(builder);
    afterSignOut(builder);
  },
});

export const { changeProfile } = userSlice.actions;
export default userSlice.reducer;
