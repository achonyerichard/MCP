import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

const Services = () => {
  return (
    <Container className="services">
      <Grid container classname="grid_container" sx={{ mb: 10 }}>
        <Grid item xs={12} sm={12} md={6} className="img_grid">
          <img
            className="img"
            src="https://www.hp.com/content/dam/sites/worldwide/personal-computers/commercial/laptops/home/first-time-buyer/africa_updates/HP-day-3-12227-banner1.png"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6} className="grid2">
          <Typography variant="h4">Shape-up ideas faster</Typography>
          <Typography variant="body1">
            We understand you need to adapt to a rapidly-changing academic
            environment in order to stay on top and prepare yourself for
            tomorrow's success. The fast processing speed of HP 14” notebook
            powered by 10th Generation Intel® Core™ i3 processor enables you to
            bring your ideas to life through quick research, collaboration and
            execution. You can multi-task, toggle between multiple windows and
            handle demanding applications with utmost ease
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6} className="grid3">
          <Typography variant="h4">
            Experience lifelike remote learning
          </Typography>
          <Typography variant="body1">
            Remote learning is the new normal. It provides learning continuity
            and expands learning opportunities. Experience lifelike remote
            learning with the HP TrueVision HD Camera. It’s improved low light
            video performance captures high-quality footage even in dim light
            that makes remote interactions more engaging. The camera has an
            integrated digital microphone which enables you to get your point
            across clearly.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="img_grid">
          <img
            className="img"
            src="https://www.hp.com/content/dam/sites/worldwide/personal-computers/commercial/laptops/home/first-time-buyer/africa_updates/HP-day-3-12227-banner2.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
