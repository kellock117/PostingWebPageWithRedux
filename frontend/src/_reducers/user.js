import { createSlice } from "@reduxjs/toolkit";
import { createUser, login } from "../_actions/user.js";

const initialState = { userName: null, message: null };

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem(process.env.REACT_APP_KEY);
      state.userName = null;
      state.message = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        localStorage.setItem(process.env.REACT_APP_KEY, action.payload.token);
        state.userName = action.payload.userName;
        state.message = action.payload.message;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem(process.env.REACT_APP_KEY, action.payload.token);
        state.userName = action.payload.userName;
        state.message = action.payload.message;
      });
  },
});

export const { logout } = userReducer.actions;
export default userReducer.reducer;
