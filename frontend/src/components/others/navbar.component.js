import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../_reducers/user.js";

import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function NavBar(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userName);

  const handleSubmit = () => {
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="h5">Company B</Typography>

        {user ? (
          <>
            <Typography variant="h6" sx={{ mr: 2, flex: 1 }} align="right">
              {user}
            </Typography>
            <Button variant="outlined" onClick={handleSubmit} size="small">
              Logout
            </Button>
          </>
        ) : (
          <Grid container xs justifyContent="flex-end">
            <Button variant="outlined" onClick={props.onClick} size="small">
              Sign {props.signUp ? "In" : "Up"}
            </Button>
          </Grid>
        )}
      </Toolbar>
    </React.Fragment>
  );
}

export default NavBar;
