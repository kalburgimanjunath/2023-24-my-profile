import { createSlice } from "@reduxjs/toolkit";
export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    blob: ["blob:testing"],
  },
  reducers: {
    add: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.blob.concat(payload);
    },
    deleteAudio: (state) => {
      state.blob -= 1;
    },
  },
});
export const { add, deleteAudio } = audioSlice.actions;

export default audioSlice.reducer;
