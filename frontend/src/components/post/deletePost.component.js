import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../_actions/post.js";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/DeleteForever";

function DeletePost(props) {
  const dispatch = useDispatch();

  const handleSubmission = e => {
    e.preventDefault();
    if (window.confirm("Are you sure to delete this post?") === true)
      dispatch(deletePost(props.postID));
  };

  if (props.currentUser === props.userName) {
    return (
      <Grid container xs justifyContent="flex-end">
        <IconButton onClick={handleSubmission}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
}

export default DeletePost;
