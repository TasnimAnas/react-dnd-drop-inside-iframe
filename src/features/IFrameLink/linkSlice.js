import { createSlice } from "@reduxjs/toolkit";

const initialState = { link: "https://google.com/", outerLink: "" };

const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    updateLink: (state, action) => {
      return { ...state, link: action.payload };
    },
    updateOuterLink: (state, action) => {
      return { ...state, outerLink: action.payload };
    },
  },
});

export default linkSlice.reducer;
export const { updateLink, updateOuterLink } = linkSlice.actions;
