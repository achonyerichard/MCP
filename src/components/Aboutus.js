import React from "react";
import { Grid } from "@mui/material";
import { Typography, Container } from "@mui/material";
import Divider from "@mui/material/Divider";

const Aboutus = () => {
  return (
    <div className="about">
      <Container>
        <Grid container spacing={8}>
          <Grid
            item
            sx={{ display: { xs: "none", md: "block" } }}
            className="img_grid2"
            md={6}
          >
            <Typography variant="h4">Get to know us</Typography>
            <Divider />
            <br />
            <img
            className="about_img"
              src="https://images.pexels.com/photos/6779410/pexels-photo-6779410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">About Us</Typography>
            <Divider>About Us</Divider>
            <br />
            <Typography className="typo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              saepe vero laboriosam! Optio explicabo ex ratione recusandae quas
              cupiditate consectetur omnis deserunt facere quibusdam, sint
              aliquam sunt atque aperiam, dolorem praesentium non. Nihil eaque
              inventore sapiente libero, repellat dolorum sequi velit ut quos
              deleniti magni cum, nemo, aliquid soluta tempora at deserunt
              consequuntur accusantium placeat cumque reiciendis porro quo
              
            </Typography>
            <br />
            <Typography variant="h4">Our Goals</Typography>
            <Divider>Our goals</Divider>
            <br />
            <Typography className="typo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              saepe vero laboriosam! Optio explicabo ex ratione recusandae quas
              cupiditate consectetur omnis deserunt facere quibusdam, sint
              aliquam sunt atque aperiam, dolorem praesentium non. Nihil eaque
              inventore sapiente libero, repellat dolorum sequi velit ut quos
              deleniti magni cum, nemo, aliquid soluta tempora at deserunt
              consequuntur accusantium placeat cumque reiciendis porro quo
              
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Aboutus;
