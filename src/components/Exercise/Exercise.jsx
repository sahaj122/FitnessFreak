import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import jog from "../../../public/running.png";
import yoga from "../../../public/yoga.png";
import gym from "../../../public/gym.png";
import walk from "../../../public/walking.png";

const Exercise = (props) => {
  return (
    <>
      <h4 style={{ color: "black", fontSize: "20px", textAlign: "left" }}>
        To burn {props.calories} calories you will have to
      </h4>

      {/* Jog */}
      <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
        <Grid container spacing={1} columns={16}>
          <Grid item xs={4}>
            <img src={jog} alt="jogging" style={{ height: "80px" }} />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "left", marginTop: "-20px" }}>
            <h3 style={{ color: "darkgreen" }}>Jog</h3>
            <p style={{ color: "black", marginTop: "-10px" }}>
              You will have to jog for {props.jog} minutes
            </p>
          </Grid>
        </Grid>
      </Box>

      {/* Do Power Yoga */}
      <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
        <Grid container spacing={1} columns={16}>
          <Grid item xs={4}>
            <img src={yoga} alt="yoga" style={{ height: "80px" }} />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "left", marginTop: "-20px" }}>
            <h3 style={{ color: "darkgreen" }}>Do Power Yoga</h3>
            <p style={{ color: "black", marginTop: "-10px" }}>
              You will have to Power Yoga for {props.powerYoga} minutes
            </p>
          </Grid>
        </Grid>
      </Box>

      {/* Gym */}
      <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
        <Grid container spacing={1} columns={16}>
          <Grid item xs={4}>
            <img src={gym} alt="gym" style={{ height: "80px" }} />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "left", marginTop: "-20px" }}>
            <h3 style={{ color: "darkgreen" }}>Get a Gym Workout</h3>
            <p style={{ color: "black", marginTop: "-10px" }}>
              You will have to Gym for {props.gym} minutes
            </p>
          </Grid>
        </Grid>
      </Box>

      {/* Brisk Walk */}
      <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
        <Grid container spacing={1} columns={16}>
          <Grid item xs={4}>
            <img src={walk} alt="walk" style={{ height: "80px" }} />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "left", marginTop: "-20px" }}>
            <h3 style={{ color: "darkgreen" }}>Go for a Brisk Walk</h3>
            <p style={{ color: "black", marginTop: "-10px" }}>
              You will have to Brisk Walk for {props.walk} minutes
            </p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

Exercise.propTypes = {
  calories: PropTypes.number,
  jog: PropTypes.number,
  powerYoga: PropTypes.number,
  gym: PropTypes.number,
  walk: PropTypes.number,
};

export default Exercise;
