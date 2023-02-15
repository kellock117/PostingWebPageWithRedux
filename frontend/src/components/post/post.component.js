import React from "react";
import { isMobile } from "react-device-detect";
import DeletePost from "./deletePost.component";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

function Post(props) {
  const gridSize = isMobile ? 8 : 12;

  return (
    <React.Fragment>
      <Grid item key={props.id} xs={gridSize} justifyContent="center">
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardHeader
            title={props.title}
            subheader={
              <Typography
                display="inline"
                sx={{
                  mr: 1,
                }}
              >
                {props.userName}
              </Typography>
            }
            titleTypographyProps={{
              variant: "h5",
              fontWeight: "bold",
            }}
            action={
              <DeletePost
                currentUser={props.currentUser}
                userName={props.userName}
                postID={props.postID}
              />
            }
          ></CardHeader>
          <CardContent>
            <Typography variant="h5">{props.body}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

export default Post;
