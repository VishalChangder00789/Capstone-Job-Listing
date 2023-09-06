import { createSlice } from "@reduxjs/toolkit";

const SelectJobForEditSlice = createSlice({
  name: "Job to Edit",
  initialState: { id: "" },
  reducers: {
    addEditJob(state, action) {
      return { ...state, id: action.payload };
    },
  },
});

export default SelectJobForEditSlice;
export const { addEditJob } = SelectJobForEditSlice.actions;
