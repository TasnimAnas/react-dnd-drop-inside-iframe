import { createSlice } from "@reduxjs/toolkit";

const initialState = { link: "https://google.com/" };

const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    updateLink: (state, action) => {
      return { link: action.payload };
    },
  },
});

export default linkSlice.reducer;
export const { updateLink } = linkSlice.actions;
