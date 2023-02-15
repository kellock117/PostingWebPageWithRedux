import * as api from "../api/index.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "user/createUser",
  async formData => {
    try {
      const { data } = await api.createUser(formData);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk("user/login", async formData => {
  try {
    const { data } = await api.login(formData);

    return data;
  } catch (error) {
    console.log(error);
  }
});
