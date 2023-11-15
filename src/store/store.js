import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import audioReducer from "./features/audioSlice";
export default configureStore({
  reducer: { counter: counterReducer, audios: audioReducer },
});
