import { createSlice } from "@reduxjs/toolkit";

const SelectJobSlice = createSlice({
  name: "Selected Job",
  initialState: { id: "" },
  reducers: {
    addJob(state, action) {
      return { ...state, id: action.payload };
    },
  },
});

export default SelectJobSlice;
export const { addJob } = SelectJobSlice.actions;
