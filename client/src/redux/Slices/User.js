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
    updatedMessages: [],
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
    addUpdatedPin: (state, action) => {
      const checker = state.updatedMessages.findIndex(
        (updatedMessage) =>
          updatedMessage.PinpointerId === action.payload.PinpointerId,
      );

      if (checker === -1) {
        state.updatedMessages.push(action.payload);
      }
    },
    deleteUpdatedPin: (state, action) => {
      state.updatedMessages = state.updatedMessages.filter(
        (message) => message.PinpointerId !== action.payload,
      );
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

export const { changeProfile, logout, addUpdatedPin, deleteUpdatedPin } =
  userSlice.actions;
export default userSlice.reducer;
