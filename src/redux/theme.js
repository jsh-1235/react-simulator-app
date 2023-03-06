import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const { reducer, actions } = createSlice({
  name: "theme",
  initialState: { value: initialState },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = actions;

export default reducer;
