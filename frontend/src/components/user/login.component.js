import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login, createUser } from "../../_actions/user.js";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

function Login(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ userName: null, password: null });

  const handleSubmit = e => {
    e.preventDefault();
    if (props.signUp === true) dispatch(createUser(formData));
    else dispatch(login(formData));
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign {props.signUp ? "Up" : "In"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="userName"
            label="User Name"
            autoFocus
            onChange={onChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            onChange={onChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign {props.signUp ? "Up" : "In"}
          </Button>

          {props.message?.length > 0 ? (
            <Alert severity="error">{props.message}</Alert>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Login;
