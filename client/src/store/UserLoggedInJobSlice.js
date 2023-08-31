import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const UserLoggedInSlice = createSlice({
  name: "User Logged",
  initialState: { userName: "" },
  reducers: {
    addLoggedInUser(state, action) {
      return { ...state, userName: action.payload };
    },
  },
});

export default UserLoggedInSlice;
export const { addLoggedInUser } = UserLoggedInSlice.actions;
