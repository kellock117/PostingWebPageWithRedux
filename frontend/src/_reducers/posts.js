import { createSlice } from "@reduxjs/toolkit";
import { createPost, fetchPosts, deletePost } from "../_actions/post.js";

const initialState = { isLoading: true, list: [] };

const postReducer = createSlice({
  name: "post",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(createPost.pending, state => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.list.push(action.payload.newPost);
        state.isLoading = false;
      })
      .addCase(fetchPosts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload.posts;
        state.isLoading = false;
      })
      .addCase(deletePost.pending, state => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.list = state.list.filter(
          post => post.postID != action.payload.postID
        );
        state.isLoading = false;
      });
  },
});

export default postReducer.reducer;
