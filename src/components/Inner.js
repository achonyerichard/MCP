import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";

const Inner = () => {
  return (
    <div className="inner">
      <Container>
        <Grid container >
          <Grid item >
            <Typography>hi</Typography>
          </Grid>
          <Grid item>
            <Typography>hi</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Inner;
