import { configureStore } from "@reduxjs/toolkit";
import linkSlice from "../features/IFrameLink/linkSlice";

const store = configureStore({
  reducer: {
    link: linkSlice,
  },
});

export default store;
