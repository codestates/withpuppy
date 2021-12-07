import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    mapData: {},
  },
  reducers: {
    addMap: (state, action) => {
      state.mapData = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { addMap } = mapSlice.actions;
export default mapSlice.reducer;
