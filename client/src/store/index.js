import { configureStore } from "@reduxjs/toolkit";
import SelectJobSlice from "./SelectedJobSlice";

const store = configureStore({
  reducer: {
    SelectedJob: SelectJobSlice.reducer,
  },
});

export { store };
