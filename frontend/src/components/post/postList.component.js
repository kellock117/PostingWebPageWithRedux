import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../_actions/post.js";
import Post from "./post.component.js";
import CreatePost from "./createPost.component.js";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const user = useSelector(state => state.user.userName);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <CreatePost />
      {posts.isLoading ? (
        <CircularProgress style={{ marginLeft: "50%" }} />
      ) : (
        <Container maxWidth="sm">
          <Paper variant="outlined" sx={{ my: 5, p: 5 }}>
            <Grid container spacing={8} justifyContent="center">
              {posts.list.map(post => {
                return (
                  <Post
                    key={post.postID}
                    currentUser={user}
                    postID={post.postID}
                    title={post.title}
                    userName={post.userName}
                    body={post.body}
                  />
                );
              })}
            </Grid>
          </Paper>
        </Container>
      )}
    </React.Fragment>
  );
}

export default PostList;
