import { configureStore } from "@reduxjs/toolkit";
import SelectJobSlice from "./SelectedJobSlice";
import UserLoggedInJobSlice from "./UserLoggedInJobSlice";

const store = configureStore({
  reducer: {
    SelectedJob: SelectJobSlice.reducer,
    LoggedInUser: UserLoggedInJobSlice.reducer,
  },
});

export { store };
