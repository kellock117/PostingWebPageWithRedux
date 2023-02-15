import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../_actions/post.js";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function CreatePost() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: null, body: null });

  const handleSubmission = e => {
    e.preventDefault();
    dispatch(createPost(formData));
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" sx={{ my: 5, p: 5 }}>
        <Typography component="h1" variant="h4" align="center">
          New Post
        </Typography>
        <Box component="form" onSubmit={handleSubmission} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                title="title"
                label="Title"
                name="title"
                autoFocus
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="body"
                label="Body"
                title="body"
                multiline
                rows={6}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Post
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default CreatePost;
