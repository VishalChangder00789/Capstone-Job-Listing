import { configureStore } from "@reduxjs/toolkit";
import SelectJobSlice from "./SelectedJobSlice";
import UserLoggedInJobSlice from "./UserLoggedInJobSlice";
import SelectJobForEditSlice from "./SelectedJobForEdit";

const store = configureStore({
  reducer: {
    SelectedJob: SelectJobSlice.reducer,
    LoggedInUser: UserLoggedInJobSlice.reducer,
    SelectedJobForEdit: SelectJobForEditSlice.reducer,
  },
});

export { store };
