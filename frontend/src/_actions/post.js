import * as api from "../api/index.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk("post/createPost", async newPost => {
  try {
    const { data } = await api.createPost(newPost);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  try {
    const { data } = await api.fetchPosts();

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deletePost = createAsyncThunk("post/deletePost", async postID => {
  try {
    const { data } = await api.deletePost(postID);

    return data;
  } catch (error) {
    console.log(error);
  }
});
